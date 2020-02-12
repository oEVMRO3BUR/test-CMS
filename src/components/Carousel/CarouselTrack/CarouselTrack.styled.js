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

import AtomicList from "../../AtomicComponents/AtomicList";

export const StyledList = styled(AtomicList)`
  height: 100%;
  margin: 0;
  transition: transform 1s;
  width: 100%;
`;

export const StyledListItem = styled.li`
  display: flex;
  flex-shrink: 0;
  height: 100%;
  margin: 0;
  width: 100%;
`;

export const StyledLink = styled(Link)`
  color: inherit;
  display: block;
  flex: 1;
  text-decoration: none;
`;
