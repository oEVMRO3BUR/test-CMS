/**
 * Composant fonctionnel représentant la page principale du site internet.
 * @author Aurélie Cheng
 * @version 1.0.0
 * @license MIT
 */

// -------------------------------------------------------------------------
// Librairies

import React from "react";
import { kebabCase } from "lodash";
import { graphql,Link } from "gatsby";

// -------------------------------------------------------------------------
// Layout
import Layout from "../components/layout";

// -------------------------------------------------------------------------
// Sous composants

import AtomicMain from "../components/AtomicComponents/AtomicMain";
import AtomicLink from "../components/AtomicComponents/AtomicLink";
import "./authors.css";
import profile from "../assets/images/profile.jpg"


// -------------------------------------------------------------------------
// Composant

/**
 * Composant fonctionnel représentant la liste de tous les tags utilisés
 * @param {object} props
 * @returns {ReactElement}
 */

const AuthorIndex = ({ data }) => {
  //liste des différents auteurs
  const group = data.allAuthor.distinct;
  //tableau avec le nombre d'article par auteur
  const nbArticle = data.nbAuhtor.group;
  //tableau qui va stocker les images, le prénom et le nombre d'article pour chaque auteur
  const tab=[];
  //on recherche tout les auteurs qui ont une fiche auteur(donc qui ont eu une photo de profil)
  data.imgAuthor.edges.forEach( (el)=>{
    let nb;
    //on regarde le nombre d'article qu'ils ont écrit
    nbArticle.forEach( (el2)=>{
        if(el2.fieldValue===el.node.frontmatter.author){
          nb=el2.totalCount;
        }
    });
    //on ajoute l'auteur dans un tableau
    tab.push({
      name:el.node.frontmatter.author,
      nb:nb,
      img:el.node.frontmatter.illustration.childImageSharp.resize.src
      });
  });

 //On regarde tout les auteurs qui ont écrit un article (même ceux qui ont eu une fiche auteur)
 group.forEach( (el)=>{
   let already=false;
   let nb;
   //si un auteur n'a pas été stocké dans le tableau alors on l'ajoute dans le tableau
   tab.forEach( (el2)=>{
     if(el===el2.name){
       already=true;
     }
   })

   //la condition est valable si l'auteur n'est pas dans le tableau
   if(!already){
    nbArticle.forEach( (el2)=>{
      if(el2.fieldValue===el){
        nb=el2.totalCount;
      }
    });
     tab.push({
       name:el,
       nb:nb,
       img:profile
     })
   }
 })
 console.log(tab)
//on trie le tableau en fonction du nombre d'article publié par chaque auteur
 tab.sort(function(a, b) {
  if (a.nb > b.nb) {
    return -1;
  }
  if (a.nb < b.nb) {
    return 1;
  }
  return 0;
  }
);
console.log(tab)

  return (
    <Layout>
      <AtomicMain>
        <div className="mainContainer">
          <h1>Tous les auteurs</h1>
          <div className="grille">
            {tab.map( (el,index)=>{
              //pour chaque auteur, on affiche sa photo, son nom et le nombre d'article écrit
              return(
              <div className="box" key={index}>
                  <Link to={`/authors/${kebabCase(el.name)}`}>
                  <img src={el.img}  height="150px" ></img>
                  </Link>
                  <p><AtomicLink href={`/authors/${kebabCase(el.name)}`}>
                    {el.name} {" "} ({el.nb})
                    </AtomicLink>
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </AtomicMain>
    </Layout>
  );
};
export default AuthorIndex;

/** requête
 * allAuthor: selectionne tout les auteur qui ont écrit un article
 * nbAuthor: le nombre d'article écrit par les auteurs
 * imgAUthor: selectionne les fiche auteur 
 */
export const query = graphql`
  query {
    allAuthor: allMarkdownRemark(
      filter: { frontmatter: { tags: { ne: "author" } } }
    ) {
      edges {
        node {
          frontmatter {
            author
          }
        }
      }
      distinct(field: frontmatter___author)
    }
    nbAuhtor: allMarkdownRemark(
      filter: { frontmatter: { tags: { ne: "author" } } }
    ) {
      group(field: frontmatter___author) {
        totalCount
        fieldValue
      }
    }
    imgAuthor: allMarkdownRemark(
      filter: { frontmatter: { tags: { in: "author" } } }
    ) {
      edges {
        node {
          frontmatter {
            author
            illustration {
              childImageSharp {
                resize(height: 150) {
                  src
                }
              }
            }
          }
        }
      }
    }
  }
`;
/* <ul>
              {group.map((el, index) => (
              <li key={index}>

              <AtomicLink className="link" href={`/authors/${kebabCase(el)}/`}>
              {el} 
              { 
              nbArticle.map( (el2, index2) => {
              if(el2.fieldValue===el)
              {
              return(
              <span key={index2}> ({el2.totalCount})</span>
              );
              }
              return null;
              }) 
              }
              </AtomicLink>
              </li>
              ))}
          </ul> */