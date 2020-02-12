/**
 * Module exploitant l'API de Gatsby.
 * @author Adham Hajji
 * @version 2.0.0
 * @license MIT
 */

const path = require("path");
const _ = require('lodash');
const { createFilePath } = require("gatsby-source-filesystem");
const { fmImagesToRelative } = require('gatsby-remark-relative-images');

/**
 * Hook exécuté lors de la création des noeuds de contenu.
 * @param {object} param
 */
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  fmImagesToRelative(node);

  // Si le noeud en question est un post
  if (node.internal.type === "MarkdownRemark") {
    const slug = createFilePath({
      node,
      getNode,
      basePath: "src/posts",
      trailingSlash: false
    });
    createNodeField({ node, name: "slug", value: slug });
  }
};

/**
 * Hook destiné à la création dynamique de pages.
 * @param {object} param
 */
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) =>
    graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
            frontmatter{
              tags
              author
            }
          }
        }
      }
    }
    `).then(result => resultCallback(resolve, result))
  );
  
  function resultCallback(resolve, result) {
    //liste de l'ensemble des tags
    let tags = [];
    //liste de l'ensemble des auteurs
    let authors = [];
    // On itère sur chaque post pour récupérer les tags associés
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      const slug = node.fields.slug;
      const tag=node.frontmatter.tags;
      const author=node.frontmatter.author;
      // S'il y a des tags on ajoute 
      if (node.frontmatter.tags) {
        tags = [...tags, ...tag];
      }
      //on ajoute un auteur
      if(author)
      {
        authors.push(author)
      }
      let haveNull=false;
      tag.forEach( (el)=>
      {
        if(el==="author")
        {
          haveNull=true;
        }
      })
      // Page Article
      //On crée une page si il ne correspond à un fichier md d'un auteur
      if(haveNull===false)
      {
        createPage({
          path: `/article${slug}`,
          component: path.resolve("./src/templates/article.js"),
          context: {
            slug: slug,
            tags: tag,
            author: node.frontmatter.author
          }
        });
      }
    });
    // On retire les doublons
    tags = _.uniq(tags);
    // Page Tag
    authors= _.uniq(authors)

    //on enleve le tags auteur dans la liste de tag
    function findNull(el) {
      return el==="author";
    }
    const id=tags.findIndex(findNull);
    if(id===0)
    {
      tags.splice(0,1);
    }
    else{
      tags.splice(id,1)
    }

    //on crée des pages pour les auteurs et pour les tags
    authors.forEach( author=>{
      createPage({
        path: `/authors/${_.kebabCase(author)}`,
        component: path.resolve("src/templates/author.js"),
        context: {
          author:author
        }
      })
    });
    tags.forEach(tag => {
      createPage({
        path: `/tags/${_.kebabCase(tag)}`,
        component: path.resolve("src/templates/tags.js"),
        context: {
          tag
        }
      })
    });
    resolve();
  }
};
