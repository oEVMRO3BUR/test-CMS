/**
 * Composant atomique représentant un simple bouton.
 * @author Adham Hajji
 * @version 2.0.0
 * @license MIT
 */

// -------------------------------------------------------------------------
// Librairies

import styled from "styled-components";

// -------------------------------------------------------------------------
// Composant atomique

const AtomicButton = styled.button`
  align-items: center;
  background-color: ${({ background }) => background};
  color: ${({ foreground }) => foreground};
  display: flex;
  font-family: inherit;
  font-size: 1rem;
  justify-content: center;
  list-style-type: none;
  padding-left: 0;

  &:focus {
    outline: 0.1rem solid currentColor;
  }
`;

// -------------------------------------------------------------------------
// Props par défaut

AtomicButton.defaultProps = {
  background: "var(--gris)",
  foreground: "var(--noir)"
};

export default AtomicButton;
