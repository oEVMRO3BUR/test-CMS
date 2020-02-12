/**
 * Composant atomique représentant un calque de positionnement. A utiliser avec le composant atomique Container.
 * @author Adham Hajji
 * @version 2.0.0
 * @license MIT
 */

// -------------------------------------------------------------------------
// Librairies

import styled from "styled-components";

// -------------------------------------------------------------------------
// Composant atomique

const AtomicLayer = styled.div`
  box-sizing: border-box;
  height: 100%;
  left: 0;
  overflow: hidden;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: ${({ index }) => index};
`;

// -------------------------------------------------------------------------
// Props par défaut

AtomicLayer.defaultProps = {
  index: 0
};

export default AtomicLayer;
