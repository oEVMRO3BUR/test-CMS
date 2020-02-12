/**
 * Composant atomique représentant un lien.
 * @author Adham Hajji
 * @version 2.0.0
 * @license MIT
 */

// -------------------------------------------------------------------------
// Librairies

import styled from "styled-components";

// -------------------------------------------------------------------------
// Composant atomique

const AtomicLink = styled.a`
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

export default AtomicLink;
