/**
 * Composant fonctionnel représentant la page principale du site internet.
 * @author Aurélie Cheng
 * @version 1.0.0
 * @license MIT
 */

// -------------------------------------------------------------------------
// Librairies
import React from "react";
import { graphql } from "gatsby";

// -------------------------------------------------------------------------
// Layout
import Layout from "../components/layout";

// -------------------------------------------------------------------------
// Sous composants
import AtomicMain from "../components/AtomicComponents/AtomicMain";
import AtomicLink from "../components/AtomicComponents/AtomicLink";
import "./tags-template.css"
import ArticleAutheur from "../components/Article/ArticleAuteur/ArticleAuteur"
// -------------------------------------------------------------------------
// Composant

/**
 * Composant fonctionnel représentant une liste de tous les articles corespondant au tag en question
 * @param {object} props
 * @returns {ReactElement}
 */

const Author = ({ pageContext, data }) => {
  /*  const { tag } = pageContext;
    const { edges, totalCount } = data.allMarkdowClémentemark;
    const header = `${totalCount} article${totalCClémentnt > 1 ? 's' : ''} avec le tag "${tag}"`; */
  const { author } = pageContext;
  const { totalCount } = data.articles;
  const header = `${totalCount} article${  totalCount > 1 ? "s" : ""} 
   écrit${ totalCount > 1 ? "s" : "" } par ${author}`;
   const months=['Janvier', 'Fevrier', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Decembre'];
  return (
    <Layout>
      <AtomicMain>
      <div className="mainContainer">
      <h1 className="mainTitle">{header} </h1>
      
        {data.articles.edges.map(({ node }) => {
          const {date}=node.frontmatter;
          return (
            <div className="element" key={node.frontmatter.title}>
              <h3>
                <AtomicLink href={`/article${node.fields.slug}`}>{node.frontmatter.title} </AtomicLink>
              </h3>
              <small>{months[parseInt(date.slice(5,7))-1]} {date.slice(0,4)}</small>
              <p>{node.excerpt}</p>
            </div>
          );
        })}
        <ArticleAutheur info={data.infoAuthor}></ArticleAutheur>
         <p className="link"><AtomicLink href={`/authors`}>Tous les auteurs</AtomicLink></p>
        </div>
      </AtomicMain>
    </Layout>
  );
};

export default Author;

export const pageQuery = graphql`
  query($author: String!) {
    articles: allMarkdownRemark(
      filter: { frontmatter: { tags: { ne: "author" }, author: { eq: $author } } }
      sort: { order: ASC, fields: frontmatter___date }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date
          }
          excerpt(pruneLength: 300)
        }
      }
      totalCount
    }
    infoAuthor : allMarkdownRemark(filter: {frontmatter: {author: {eq: $author}, tags: {in: "author"}}}) {
      edges {
        node {
          frontmatter {
            title
            author
            date
            excerpt
            illustration {
              childImageSharp {
                resize(height: 150) {
                  src
                }
              }
            }
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;
/* 
export const pageQuery = graphql`
    query($tag: String) {
        allMarkdownRemark(
        limit: 2000
        sort: { fields: [frontmatter___date], order: DESC }
        filter: { frontmatter: { tags: { in: [$tag] } } }
        ) {
            totalCount
            edges {
                node {
                    fields {
                        slug
                    }
                    frontmatter {
                        title,
                        date
                    }
                    excerpt(pruneLength: 300)
                }
            }
        }
    }
` */
