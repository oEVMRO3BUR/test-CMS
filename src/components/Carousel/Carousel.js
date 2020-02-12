/**
 * Composant qui représente un carrousel.
 * @author Adham Hajji
 * @version 2.0.0
 * @license MIT
 */

// -------------------------------------------------------------------------
// Librairies

import React from "react";

// -------------------------------------------------------------------------
// Styles

import {
  StyledCarouselContainer,
  StyledCarouselTrack,
  StyledCarouselDirections,
  StyledCarouselNavigation
} from "./Carousel.styled";

// -------------------------------------------------------------------------
// Composant

/**
 * @class
 * @classdesc Composant qui représente un carrousel.
 */
export default class Carousel extends React.Component {
  /**
   * Constructeur du composant.
   * @constructor
   * @param {object} props
   */
  constructor(props) {
    super(props);

    this.state = {
      currentSlide: 0
    };

    this.articles = props.articles;

    // Note : Cette propriété contiendra l'itérateur de slides.
    // Voir la méthode startNewSlidingIterator()
    this.currentSlidingIterator = null;
    this.intervalDuration = 4000;
  } // constructor()

  /**
   * Lifecycle appelé lorsque le composant est ancré au DOM.
   */
  componentDidMount() {
    this.startNewSlidingIterator();
  } // componentDidMount()

  /**
   * Lifecycle appelé lorsque le composant est détaché du DOM.
   */
  componentWillUnmount() {
    if (this.currentSlidingIterator) clearInterval(this.currentSlidingIterator);
  }

  /**
   * Corriger un index de slide quelconque.
   * @param {number} unfixedPosition
   * @returns {number} Index de slide valide.
   */
  fixSlideIndex(unfixedPosition) {
    const length = this.articles.length;
    return ((unfixedPosition % length) + length) % length;
  } // fixSlideIndex()

  /**
   * Event Handler appelé lorsque l'utilisateur appuye sur une puce de la barre de navigation.
   * @param {number} slideIndex
   */
  handleBulletOnClick = slideIndex => {
    this.setState({ currentSlide: slideIndex }, this.startNewSlidingIterator);
  }; // handleBulletOnClick()

  /**
   * Event Handler appelé lorsque l'utilisateur appuye sur une flèche de navigation.
   * @param {string} slidingDirection
   */
  handleButtonOnClick = slidingDirection => {
    this.setState(
      prevState => ({
        currentSlide:
          slidingDirection === "left"
            ? this.fixSlideIndex(prevState.currentSlide - 1)
            : this.fixSlideIndex(prevState.currentSlide + 1)
      }),
      this.startNewSlidingIterator
    );
  }; // handleButtonOnClick()

  /**
   * Créer un itérateur simple commençant au slide actuel tout en supprimant l'ancien itérateur.
   */
  startNewSlidingIterator() {
    if (this.currentSlidingIterator) clearInterval(this.currentSlidingIterator);

    this.currentSlidingIterator = setInterval(_ => {
      this.setState(prevState => ({
        currentSlide: this.fixSlideIndex(++prevState.currentSlide)
      }));
    }, this.intervalDuration);
  } // startNewSlidingIterator()

  /**
   * Fonction de rendu du composant.
   * @returns {ReactElement} Un carrousel.
   */
  render() {
    const controls = (
      <React.Fragment>
        <StyledCarouselDirections
          handleButtonOnClick={this.handleButtonOnClick}
        />
        <StyledCarouselNavigation
          length={this.articles.length}
          currentSlide={this.state.currentSlide}
          handleBulletOnClick={this.handleBulletOnClick}
        />
      </React.Fragment>
    );

    return (
      <StyledCarouselContainer>
        <StyledCarouselTrack
          currentSlide={this.state.currentSlide}
          articles={this.articles}
        />
        ${this.articles.length > 1 && controls}
      </StyledCarouselContainer>
    );
  } // render()
} // Carousel
