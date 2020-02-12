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

export const StyledHiddenPanel = styled.div`
  background-color: var(--gris);
  height: 100vh;
  left: 0;
  max-width: 100%;
  position: fixed;
  top: 0;
  transform: translateX(${({ show }) => (show ? "0%" : "100%")});
  transform-style: preserve-3d;
  transition: transform 0.5s;
  width: 100vw;
  z-index: 1;
  overflow: auto;
`;

export const StyledPanelContent = styled.div`
  max-width: 100%;
  text-align: center;
  z-index: 1;
  padding-left: 10%;
  padding-right: 10%;
  padding-top: 30px;
  line-height: 1rem;
`;

export const StyledLink = styled.a`
  text-decoration: none;

  &:link,
  &:active,
  &:visited {
    color: var(--bleu);
  }

  &:focus,
  &:hover {
    color: var(--rouge);
  }
`;

export const Paragraph = styled.p`
  padding-top: 0.4rem;
  padding-bottom: 0.4rem;
  font-size: 20px;
  line-height: 20px;
  margin: 0;

  @media (max-width: 700px) {
    font-size: 14px;
    line-height: 15px;
  }
`;

export const Title = styled.h1`
  font-size:40px;

  @media (max-width: 700px) {
    font-size: 30px;
  }
`;

export const StyledBurgerButton = styled.button`
  background-color: transparent;
  border: none;
  padding: 0px;
  position: relative;
  z-index: 2;
  &.is-active{
    position:fixed;
    right:15px;
  }

`;
