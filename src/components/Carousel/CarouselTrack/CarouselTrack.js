/**
 * Composant qui représente la trame du carrousel.
 * @author Adham Hajji
 * @version 2.0.0
 * @license MIT
 */

// -------------------------------------------------------------------------
// Librairies

import React from "react";

// -------------------------------------------------------------------------
// Sous composants

import CarouselSlide from "../CarouselSlide/CarouselSlide";

// -------------------------------------------------------------------------
// Styles

import { StyledList, StyledListItem, StyledLink } from "./CarouselTrack.styled";

// -------------------------------------------------------------------------
// Composant

/**
 * @class
 * @classdesc Classe de composant de trame d'un carrousel.
 */
export default class CarouselTrack extends React.Component {
  /**
   * Constructeur du composant.
   * @constructor
   * @param {Object} props
   */
  constructor(props) {
    super(props);

    this.state = {
      currentSlide: props.currentSlide
    };

    this.articles = props.articles;
  } // constructor()

  /**
   * Lifecycle appelé lorsque le composant recevra de nouveaux props.
   * @param {object} newProps
   */
  componentWillReceiveProps(newProps) {
    if (this.state.currentSlide !== newProps.currentSlide) {
      this.setState({
        currentSlide: newProps.currentSlide
      });
    }
  } // componentWillReceiveProps()

  /**
   * Fonction de rendu du composant.
   * @returns {ReactElement} Trame du carrousel.
   */
  render() {
    const listTemplate = this.articles.map((article, index) => (
      <StyledListItem key={index} className={this.props.className}>
        <StyledLink className={this.props.className} tabIndex={-1} to={`/article${article.fields.slug}`}>
          <CarouselSlide
            backgroundSizes={
              article.frontmatter.illustration.childImageSharp.fluid
            }
            description={article.frontmatter.excerpt}
            title={article.frontmatter.title}
          />
        </StyledLink>
      </StyledListItem>
    ));

    return (
      <StyledList
        className={this.props.className}
        orientation="row"
        style={{ transform: `translateX(-${this.state.currentSlide * 100}%` }}
      >
        {listTemplate}
      </StyledList>
    );
  } // render()
} // CarouselTrack
