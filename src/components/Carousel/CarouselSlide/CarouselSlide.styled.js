/**
 * @author Adham Hajji
 * @version 2.0.0
 * @license MIT
 */

// -------------------------------------------------------------------------
// Librairies

import styled from "styled-components";

// -------------------------------------------------------------------------
// Styles

import AtomicContainer from "../../AtomicComponents/AtomicContainer";
import AtomicLayer from "../../AtomicComponents/AtomicLayer";

export const StyledBackgroundLayer = styled(AtomicLayer)`
  background: var(--gris);
  display: flex;
  flex-direction: column;
  filter: grayscale(100%) opacity(50%);
  justify-content: center;
  transition: transform 0.5s;
  height:100%;
  & *{
    height: 100%;
  }
`;

export const StyledContainer = styled(AtomicContainer)`
  margin: 0;

  &:hover ${StyledBackgroundLayer} {
    transform: scale(1.2);
  }
`

export const StyledDetailsLayer = styled(AtomicLayer)`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;
  text-align: center;
`

export const StyledDescription = styled.p`
  margin: 0;
  font-size:20px;
  
  @media(max-height:650px)
  {
    font-size:14px;
  }
  @media(max-width:650px)
  {
    font-size:14px;
    @media(max-height:650px)
    {
      display:none
    }
  }
`;

export const StyledTitle = styled.h1`
  font-size:30px;
  margin :0 0px 20px 0;
  @media(max-height:650px)
  {
    margin:0;
    font-size:22px;
  }
  @media(max-width:650px)
  {
    margin:0;
    font-size:22px;
  }
`;