/**
 * Composant fonctionnel représentant le corps de l'article
 * @author Adham Hajji
 * @version 2.0.0
 * @license MIT
 */

// -------------------------------------------------------------------------
// Librairies

import React from "react";

// -------------------------------------------------------------------------
// Styles

import { StyledBody } from "./ArticleBody.styled";

// -------------------------------------------------------------------------
// Composant

/**
 * Composant fonctionnel représentant le corps de l'article
 * @param {object} props
 * @return {ReactElement} Corps de l'article
 */
export default class ArticleBody extends React.Component {
  render(){ 
    return (
    <StyledBody>
      {this.props.children}
    </StyledBody>
      );
  }
}