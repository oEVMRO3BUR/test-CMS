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

export const StyledNavigation = styled.nav`
  box-sizing: border-box;
  height: 20%;
  padding: 2rem 0;
  width: 100%;
`;

export const StyledPagination = styled.ol`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: space-between;
  list-style-type: none;
  margin: 0 auto;
  max-width: 1000px;
  padding-left: 0;
`;

export const StyledItem = styled.li`
  flex: 1;

  &:not(:last-child) {
    margin-right: 2rem;
  }
`;

export const StyledBullet = styled.button`
  background-color: var(--noir);
  border: none;
  cursor: pointer;
  display: block;
  height: 5px;
  padding: 0;
  transition: opacity 0.5s;
  width: 100%;

  ${({ active }) => active === false && "opacity: .5"};
`;
