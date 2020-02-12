/**
 * Composant fonctionnel représentant la navigation du carrousel.
 * @author Adham Hajji
 * @version 2.0.0
 * @license MIT
 */

// -------------------------------------------------------------------------
// Librairies

import React from "react";

// -------------------------------------------------------------------------
// Styled components

import {
  StyledNavigation,
  StyledPagination,
  StyledItem,
  StyledBullet
} from "./CarouselNavigation.styled";

// -------------------------------------------------------------------------
// Composant

/**
 * Composant fonctionnel représentant la navigation du carrousel.
 * @param {object} props
 * @returns {ReactElement} Navigation du carrousel.
 */
export default function CarouselNavigation({
  className,
  length,
  currentSlide,
  handleBulletOnClick
}) {
  const children = Array(length)
    .fill()
    .map((_, index) => (
      <StyledItem key={index}>
        <StyledBullet
          active={currentSlide === index}
          onClick={_ => handleBulletOnClick(index)}
          aria-label={"article "+(index+1)}
        />
      </StyledItem>
    ));

  return (
    <StyledNavigation className={className}>
      <StyledPagination>{children}</StyledPagination>
    </StyledNavigation>
  );
} // CarouselNavigation()
