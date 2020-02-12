/**
 * Composant fonctionnel représentant une page d'article.
 * @author Adham Hajji
 * @version 2.0.0
 * @license MIT
 */

// -------------------------------------------------------------------------
// Librairies

import React from "react";
import RehypeReact from "rehype-react";
import { graphql } from "gatsby";

// -------------------------------------------------------------------------
// Style

import "./code-theme.css";

// -------------------------------------------------------------------------
// Sous composants

import Helmet from "react-helmet";
import {CircleArrow as ScrollUpButton} from "react-scroll-up-button";
import PercentageBar from '../components/Percentage/Percentage';

import ArticleFrontmatter from "../components/Article/ArticleFrontmatter/ArticleFrontmatter";
import ArticleBody from "../components/Article/ArticleBody/ArticleBody";
import SimilarArticles from "../components/Article/SimilarArticles/SimilarArticles";
import ArticleAuteur from "../components/Article/ArticleAuteur/ArticleAuteur"

// -------------------------------------------------------------------------
// Layout
import Layout from "../components/layout"

// Images
import endImg from "../assets/images/fin.png"

// -------------------------------------------------------------------------
// Registre de composants disponibles dans le code Markdown

import {
  AtomicH1,
  AtomicH2,
  AtomicH3,
  AtomicH4,
  AtomicH5,
  AtomicH6
} from "../components/AtomicComponents/AtomicTitles";
import AtomicLink from "../components/AtomicComponents/AtomicLink";

const registeredComponents = {
  h1: AtomicH1,
  h2: AtomicH2,
  h3: AtomicH3,
  h4: AtomicH4,
  h5: AtomicH5,
  h6: AtomicH6,
  a: AtomicLink
};

// -------------------------------------------------------------------------
// Composant

/**
 * Composant fonctionnel représentant une page d'article.
 * @param {object} props
 * @returns {ReactElement} Page principale du site internet.
 */
export default class Index extends React.Component{
  constructor(props){
    super(props);
    this.state={
      articleOffsetHeight:0,
      articleOffsetTop:0
    }

    this.articleRef = React.createRef();
    this.articleHeadRef = React.createRef();  
  }

  /**
   * Met à jour l'état des attributs que l'on passera aux éléments enfants:
   *  - articleOffsetHeight: taille totale en pixel de l'article
   *  - articleOffsetTop: marge en pixel entre le début de la page et le début de l'article
   *  - articleHeadOffsetHeight: taille de l'image en tête d'article
   */
  updateAttributes=()=>{
    this.setState({
      articleOffsetHeight:this.articleRef.current.offsetHeight,
      articleOffsetTop:this.articleRef.current.offsetTop,
      articleHeadOffsetHeight: this.articleHeadRef.current.offsetHeight || 0
    })
  }

  /**
   * Instancie l'état des attributs passé une première fois aux enfants
   */
  componentDidMount=()=>{
    this.updateAttributes();
  }

  render=()=>{
    const renderAst = new RehypeReact({
      createElement: React.createElement,
      components: registeredComponents
    }).Compiler;
    const article = this.props.data.article;
  
    const backgroundSizes =
      article.frontmatter.illustration.childImageSharp.fluid;  
  
    const ogtitle = article.frontmatter.title +" - Blog Coddity";
    const info=this.props.data.infoAuthor;
    return (
      <Layout>
        <article ref={this.articleRef}>
          <Helmet>
          <title>{ogtitle}</title>
          <meta property="og:title" content={ogtitle}/>
          </Helmet>
          <ArticleFrontmatter
            title={article.frontmatter.title}
            date={article.frontmatter.date}
            author={article.frontmatter.author}
            backgroundSizes={backgroundSizes}
            tags={article.frontmatter.tags}
            // passage de la référence en props pour obtenir la référence enfant de l'élément ArticleFrontmatter
            ref={this.articleHeadRef}
          />
          <PercentageBar 
            // méthode passée en props pour mettre à jour les attributs en fonction du resize de la fenêtre
            handleResize={this.updateAttributes}
            artOffsetHeight={this.state.articleOffsetHeight} 
            artOffsetTop={this.state.articleOffsetTop}
            artHeadOffsetHeight={this.state.articleHeadOffsetHeight}
            minHeight={"1500"}/>
          <ArticleBody>
            {renderAst(article.htmlAst)}
            <img src={endImg} alt="FIN" style={{
              display: 'block',
              marginLeft: 'auto',
              marginRight: 'auto',
              marginTop: '10px',
            }}/>
          </ArticleBody>
          
          <ScrollUpButton ContainerClassName="ScrollUpButton__Container" TransitionClassName="ScrollUpButton__Toggled"/>
        </article>
          <ArticleAuteur info={info} displayLinks={true}></ArticleAuteur>
        <SimilarArticles title={article.frontmatter.title} tags={article.frontmatter.tags} articles={this.props.data.tagRef.edges}/>
      </Layout>
    );
  }
}

// -------------------------------------------------------------------------
// Requête GraphQL

export const articleQuery = graphql`
  query articleQuery($slug: String!, $tags: [String!],$author: String!) {
   article: markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        author
        excerpt
        date(formatString: "DD/MM/YYYY")
        tags
        illustration {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      htmlAst
    }
    tagRef :allMarkdownRemark(filter: {frontmatter: {tags: {in: $tags}}}){
      edges{
        node{
          fields{
            slug
          }
          frontmatter{
            tags
            title
            author
            excerpt
            date(formatString: "DD/MM/YYYY")
          }
        }
      }
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
