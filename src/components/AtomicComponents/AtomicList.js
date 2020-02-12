/**
 * Composant atomique représentant une liste sans puce.
 * @author Adham Hajji
 * @version 2.0.0
 * @license MIT
 */

// -------------------------------------------------------------------------
// Librairies

import styled from "styled-components";

// -------------------------------------------------------------------------
// Composant atomique

const AtomicList = styled.ul`
  display: flex;
  flex-direction: ${({ orientation }) => orientation};
  list-style-type: ${({ unbulleted }) =>
    unbulleted === true ? "none" : "disc"};
  padding-left: 0;
`;

// -------------------------------------------------------------------------
// Props par défaut

AtomicList.defaultProps = {
  orientation: "column",
  unbulleted: true
};

export default AtomicList;
