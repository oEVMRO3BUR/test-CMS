/**
 * Composant fonctionnel représentant la page principale du site internet.
 * @author Adham Hajji
 * @version 2.0.0
 * @license MIT
 */

// -------------------------------------------------------------------------
// Librairies

import React from "react";
import { StaticQuery, graphql } from "gatsby";
// -------------------------------------------------------------------------
// Sous composants

import Helmet from "react-helmet";
import AtomicMain from "../components/AtomicComponents/AtomicMain";
import MoreButton from "../components/AtomicComponents/MoreButton";

import Carousel from "../components/Carousel/Carousel";
import Search from "../components/Search/Search";
import Blog from "../components/Blog/Blog";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

// -------------------------------------------------------------------------
// Layout
import Layout from "../components/layout"
// -------------------------------------------------------------------------
// Constantes 

const NB_ARTICLES = 8; // Nombre d'articles initialement sur la page d'accueil et qui sera utilisé pour obtenir plus d'articles

// -------------------------------------------------------------------------
// Composant

/**
 * Composant fonctionnel représentant la page principale du site internet.
 * @param {object} props
 * @returns {ReactElement} Page principale du site internet.
 */
export default class Index extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      limit: NB_ARTICLES
    }
  }

  handleClick = () => {
    if( this.state.limit < this.props.data.blogArticles.edges.length ){
      this.setState( (prevState) => {
        return { limit : prevState.limit + NB_ARTICLES}
      })
    }
  }

  render = () => {
    return (
      <StaticQuery 
        query= {graphql`
          fragment commonArticleData on MarkdownRemark {
            fields {
              slug
            }
            frontmatter {
              title
              excerpt
              tags
            }
            excerpt
          }

          query getArticles {
            carouselArticles: allMarkdownRemark(
              limit: 5
              sort: { fields: [frontmatter___date], order: DESC },
              filter: {frontmatter: {tags: {ne: "author"}}}
            ) {
              edges {
                node {
                  ...commonArticleData
                  frontmatter {
                    excerpt
                    illustration {
                      childImageSharp {
                        fluid {
                          ...GatsbyImageSharpFluid
                        }
                      }
                    }
                  }
                }
              }
            }

            blogArticles: allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC },
              filter: {frontmatter: {tags: {ne: "author"}}}) 
            {
              edges {
                node {
                  ...commonArticleData
                  frontmatter {
                    author
                    date
                    illustration {
                      childImageSharp {
                        resize(
                          cropFocus: CENTER
                          height: 400
                          width: 400
                          traceSVG: {
                            color: "silver"
                          }
                        ) {
                          tracedSVG
                          src
                        }
                      }
                    }
                  }
                }
              }
            }

            searchArticles: allMarkdownRemark(filter: {frontmatter: {tags: {ne: "author"}}}) {
              edges {
                node {
                  ...commonArticleData
                  frontmatter {
                    excerpt
                  }
                }
              }
            }
        }`}
        render={data => {
          const carouselArticles = data.carouselArticles.edges.map(({ node }) => node);
          const searchArticles = data.searchArticles.edges.map(({ node }) => node);
          const blogArticles = data.blogArticles.edges.map(({ node }) => node);
          return(
            <Layout>
              <Helmet>
                  <title>Blog Coddity</title>
                  <meta property="og:title" content="Blog Coddity"/>
              </Helmet>
              <Carousel articles={carouselArticles} />
              <Search articles={searchArticles} />
      
              <AtomicMain>
                <Blog articles={blogArticles} limit={this.state.limit} />
                <MoreButton 
                  onClick={this.handleClick} 
                  display={this.state.limit >= blogArticles.length ? "none" : "block"}
                >
                  PLUS D'ARTICLES <FontAwesomeIcon icon={faAngleRight}/>
                </MoreButton>
              </AtomicMain>
            </Layout>
          )
        }}
      />
    );
  }
}
