/**
 * Composants atomiques représentant des titres.
 * @author Adham Hajji
 * @version 2.0.0
 * @license MIT
 */

// -------------------------------------------------------------------------
// Librairies

import React from "react";

// -------------------------------------------------------------------------
// Styles

import styled from "styled-components";

// -------------------------------------------------------------------------
// Composant abstrait

/**
 * Composant atomique représentant un titre abstrait.
 * @param {object} props
 * @returns {ReactElement} Un titre.
 */
function AtomicTitle({ level, children }) {
  const StyledTitle = styled(`h${level}`)`
    font-size: ${1 / level + 1}rem;
  `;

  return <StyledTitle>{children}</StyledTitle>;
}

// -------------------------------------------------------------------------
// Props par défaut

AtomicTitle.defaultProps = {
  level: 1
};

// -------------------------------------------------------------------------
// Composants atomiques

export const AtomicH1 = ({ children }) => <AtomicTitle>{children}</AtomicTitle>;
export const AtomicH2 = ({ children }) => (
  <AtomicTitle level={2}>{children}</AtomicTitle>
);
export const AtomicH3 = ({ children }) => (
  <AtomicTitle level={3}>{children}</AtomicTitle>
);
export const AtomicH4 = ({ children }) => (
  <AtomicTitle level={2}>{children}</AtomicTitle>
);
export const AtomicH5 = ({ children }) => (
  <AtomicTitle level={3}>{children}</AtomicTitle>
);
export const AtomicH6 = ({ children }) => (
  <AtomicTitle level={2}>{children}</AtomicTitle>
);
