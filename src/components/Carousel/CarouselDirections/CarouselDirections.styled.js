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

export const StyledButton = styled.button`
  align-items: center;
  background: linear-gradient(
    to
      ${({ position }) =>
        position === "left" ? "right" : position === "right" && "left"},
    var(--gris) 1rem,
    transparent
  );
  border: none;
  color: inherit;
  cursor: pointer;
  display: flex;
  font-family: inherit;
  font-size: 3rem;
  height: 100%;
  justify-content: center;
  opacity: 0;
  padding: 0;
  transition: opacity 0.5s;
  width: 25%;

  ${({ position }) =>
    position === "left" ? "left: 0" : position === "right" && "right: 0"};

  &:hover {
    opacity: 1;
  }

  &:focus {
    outline: none;
  }
`;
