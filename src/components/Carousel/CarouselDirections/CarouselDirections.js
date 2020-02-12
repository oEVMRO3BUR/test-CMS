/**
 * Composant fonctionnel représentant les flèches directionnelles du carrousel.
 * @author Adham Hajji
 * @version 2.0.0
 * @license MIT
 */

// -------------------------------------------------------------------------
// Librairies

import React from "react";

// -------------------------------------------------------------------------
// Styles

import { StyledButton } from "./CarouselDirections.styled";

// -------------------------------------------------------------------------
// Composant

/**
 * Composant fonctionnel représentant les flèches directionnelles du carrousel.
 * @param {object} props
 * @returns {ReactElement} Flèches directionnelles du carrousel.
 */
export default function CarouselDirections({ className, handleButtonOnClick }) {
  return (
    <React.Fragment>
      <StyledButton
        className={className}
        onClick={_ => handleButtonOnClick("left")}
        position="left"
      >
        &larr;
      </StyledButton>

      <StyledButton
        className={className}
        onClick={_ => handleButtonOnClick("right")}
        position="right"
      >
        &rarr;
      </StyledButton>
    </React.Fragment>
  );
} // CarouselDirections()
