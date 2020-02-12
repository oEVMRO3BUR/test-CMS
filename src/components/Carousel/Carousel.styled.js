/**
 * @author Adham Hajji
 * @version 2.0.0
 * @license MIT
 */

// -------------------------------------------------------------------------
// Librairies

import styled from "styled-components";

// -------------------------------------------------------------------------
// Sous composants

import CarouselTrack from "./CarouselTrack/CarouselTrack";
import CarouselDirections from "./CarouselDirections/CarouselDirections";
import CarouselNavigation from "./CarouselNavigation/CarouselNavigation";

// -------------------------------------------------------------------------
// Styles

import AtomicContainer from "../AtomicComponents/AtomicContainer";

export const StyledCarouselTrack = styled(CarouselTrack)``;
export const StyledCarouselDirections = styled(CarouselDirections)``;
export const StyledCarouselNavigation = styled(CarouselNavigation)``;

export const StyledCarouselContainer = styled(AtomicContainer)`
  background-color: var(--gris);
  height: 275px;
  @media(max-height:650px)
  {
    height:200px
  }


  ${StyledCarouselDirections}, ${StyledCarouselNavigation} {
    position: absolute;
  }

  ${StyledCarouselDirections} {
    top: 0;
  }
  ${StyledCarouselNavigation} {
    bottom: 0;
  }
`;
