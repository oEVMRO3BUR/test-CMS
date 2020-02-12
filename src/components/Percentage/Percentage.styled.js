/**
 * @author Victor Ronfaut
 * @version 3.0.0
 * @license MIT
 */

// -------------------------------------------------------------------------
// Librairies

import styled from "styled-components";

// -------------------------------------------------------------------------
// Style

// Conteneur de la scroll bar

export const PercentageDiv = styled.div.attrs(props => ({
  style: {
    position: `${props.position}`,
    top: `${props.top}`,
  }
}))`
  display:inline-block;
  left: 0px;
  background-color:#EEE;
  width:100%;
  height:0.6rem;
  z-index:10;
`;

// Span remplissant au fur et à mesure du scroll son conteneur
export const PercentageSpan = styled.span.attrs(props => ({
  style: {
    width: `${props.width}`
  }
}))`
  position:absolute;
  left:0px;
  height:100%;
  background-color:#cd4442;
`;