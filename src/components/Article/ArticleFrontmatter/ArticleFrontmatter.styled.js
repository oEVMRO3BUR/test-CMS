/**
 * @author Adham Hajji
 * @version 2.0.0
 * @license MIT
 */

// -------------------------------------------------------------------------
// Librairies

import { Link } from "gatsby";
import styled from "styled-components";

// -------------------------------------------------------------------------
// Sous composants

import AtomicContainer from "../../AtomicComponents/AtomicContainer";
import AtomicLayer from "../../AtomicComponents/AtomicLayer";

// -------------------------------------------------------------------------
// Styles

export const StyledContainer = styled(AtomicContainer)`
  height: 300px;
  @media(max-height:650px)
  {
    height:200px;
  }
  z-index: 0;
`

export const StyledBackgroundLayer = styled(AtomicLayer)`
  background: var(--gris);
  display: flex;
  flex-direction: column;
  justify-content: center;
  & *{
    height: 100%;
  }
`;

export const StyledDetailsLayer = styled(AtomicLayer)`
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;
  @media (max-width: 650px) {
    padding: 1rem;
  }
  text-align: center;
  z-index: 1;
  text-shadow: 1px 0 0 #000, 1px 1px 0 #000, 0 1px 0 #000, 
              -1px 1px 0 #000, -1px 0 0 #000, -1px -1px 0 #000, 
              0 -1px 0 #000, 1px -1px 0 #000;
`;

export const StyledSubtitle = styled.p`
  margin: 0;
  font-size:20px;
  @media (max-width: 650px) {
    font-size:14px;
  }
`;

export const StyledTag = styled(Link)`
  text-decoration: none;
  &:link {
    color: white;
  },
  &:active,
  &:visited {
    color: white;
  }
  &:hover {
    color: var(--rouge);
  }
  &:not(:last-child) {
    margin-right: 0.5rem;
  }
  font-size: 15px;
  margin:0 0 10px 0;
  @media (max-width: 650px) {
    margin:0
    font-size:10px;
  }
  @media(max-height:650px)
  {
    margin:0
  }
  
`;

export const StyledTitle = styled.h1`
margin:0 0 1Opx 0;
font-size:30px;
@media (max-width: 650px) {
  margin:0;
  font-size:23px;
}
@media(max-height:650px)
{
  margin:0
}
`;

export const StyledLink=styled(Link)`
text-decoration:none;
color: white;
&:hover {
  color:#CD4442;
}
`;