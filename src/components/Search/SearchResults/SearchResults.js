/**
 * Composant fonctionnel représentant les résultats d'une recherche.
 * @author Adham Hajji
 * @version 2.0.0
 * @license MIT
 */

// -------------------------------------------------------------------------
// Librairies

import React from "react";

// -------------------------------------------------------------------------
// Sous composants

import { AtomicH1 } from "../../AtomicComponents/AtomicTitles";

// -------------------------------------------------------------------------
// Styles

import {
  StyledResultsList,
  StyledResultItem,
  StyledResultLink,
  StyledResultExcerpt
} from "./SearchResults.styled";

// -------------------------------------------------------------------------
// Composant

/**
 * Composant fonctionnel représentant les résultats d'une recherche.
 * @param {object} props
 * @returns {ReactElement} Résultats d'une recherche.
 */
export default function SearchResults({ results }) {
  const resultsTemplate = results.map((article, key) => (
    <StyledResultItem key={key}>
      <StyledResultLink to={`/article${article.fields.slug}`}>
        <AtomicH1>{article.frontmatter.title}</AtomicH1>
        <StyledResultExcerpt>{article.frontmatter.excerpt}</StyledResultExcerpt>
      </StyledResultLink>
    </StyledResultItem>
  ));

  return <StyledResultsList>{resultsTemplate}</StyledResultsList>;
}
