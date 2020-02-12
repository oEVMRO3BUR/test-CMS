/**
 * Composant fonctionnel représentant l'en-tête du site.
 * @author Adham Hajji
 * @version 2.0.0
 * @license MIT
 */

// -------------------------------------------------------------------------
// Librairies

import React from "react";

// -------------------------------------------------------------------------
// Sous composant

import HeaderBurger from "./HeaderBurger/HeaderBurger";

// -------------------------------------------------------------------------
// Styles

import { StyledBar, StyledLink, StyledBrand } from "./Header.styled";

// -------------------------------------------------------------------------
// Assets

import CoddityLogo from "../../../assets/images/coddityLogo.svg";
// Le texte est séparé en deux pour pouvoir jouer avec en CSS
import Coddity from "../../../assets/images/Coddity.svg";
import Blog from "../../../assets/images/Blog.svg";


// -------------------------------------------------------------------------
// Composant

/**
 * Composant fonctionnel représentant l'en-tête du site.
 * @return {ReactElement} En-tête du site.
 */
export default function Header() {
  return (
    <StyledBar>
      <StyledLink to="/" title="Accueil du blog">
        <StyledBrand>
          <CoddityLogo viewBox="0 0 328 330" alt="Logo de Coddity"/>
          <Coddity viewBox="0 0 333 70" className={"CoddityText"} alt="Coddity"/>
          <Blog viewBox="0 0 205 68" className={"BlogText"} alt="Blog"/>
        </StyledBrand>
      </StyledLink>
      <HeaderBurger />
    </StyledBar>
  );
} // Header()
