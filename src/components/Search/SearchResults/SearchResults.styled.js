/**
 * @author Adham Hajji
 * @version 2.0.0
 * @license MIT
 */

// -------------------------------------------------------------------------
// Librairies

import styled from "styled-components";

// -------------------------------------------------------------------------
// Sous composants

import { Link } from "gatsby";

// -------------------------------------------------------------------------
// Styles

export const StyledResultsList = styled.ol`
  background-color: var(--gris);
  list-style-type: none;
  margin: 0;
  padding-left: 0;
`;

export const StyledResultItem = styled.li`
  border-top: 0.1rem solid white;
  transition: background-color 0.5s;

  &:hover {
    background-color: var(--gris-foncé);
  }
`;

export const StyledResultLink = styled(Link)`
  box-sizing: border-box;
  color: inherit;
  display: block;
  height: 100%;
  padding: 1rem 1.5rem;
  text-decoration: none;
  width: 100%;
`;

export const StyledResultExcerpt = styled.p`
  margin: 0;
`;
