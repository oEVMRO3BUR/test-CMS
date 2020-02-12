/**
 * Composant fonctionnel représentant un slide de carrousel.
 * @author Adham Hajji
 * @version 2.0.0
 * @license MIT
 */

// -------------------------------------------------------------------------
// Librairies

import React from "react";

// -------------------------------------------------------------------------
// Sous composants

import Img from "gatsby-image";

// -------------------------------------------------------------------------
// Styles

import {
  StyledContainer,
  StyledBackgroundLayer,
  StyledDetailsLayer,
  StyledDescription,
  StyledTitle
} from "./CarouselSlide.styled";

// -------------------------------------------------------------------------
// Composant

/**
 * Composant fonctionnel représentant un slide de carrousel.
 * @param {object} props
 * @returns {ReactElement} Slide de carrousel.
 */
export default function CarouselSlide({ backgroundSizes, title, description }) {
  return (
    <StyledContainer>
      <StyledBackgroundLayer>
        <Img fluid={backgroundSizes} />
      </StyledBackgroundLayer>
      <StyledDetailsLayer index={1}>
        <StyledTitle>{title}</StyledTitle>
        <StyledDescription>{description}</StyledDescription>
      </StyledDetailsLayer>
    </StyledContainer>
  );
} // CarouselSlide()
