/**
 * Composant atomique représentant un simple conteneur de positionnement.
 * @author Adham Hajji
 * @version 2.0.0
 * @license MIT
 */

// -------------------------------------------------------------------------
// Librairies

import styled from "styled-components";

// -------------------------------------------------------------------------
// Composant atomique

const AtomicContainer = styled.div`
  box-sizing: border-box;
  height: ${({ height }) => height};
  overflow: hidden;
  position: relative;
  width: ${({ width }) => width};
`;

// -------------------------------------------------------------------------
// Props par défaut

AtomicContainer.defaultProps = {
  height: "100%",
  width: "100%"
};

export default AtomicContainer;
