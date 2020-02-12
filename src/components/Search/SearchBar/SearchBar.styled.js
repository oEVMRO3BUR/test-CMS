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

export const StyledSearchInput = styled.input`
  background-color: var(--gris);
  border: none;
  border-top: 2px solid rgba(0,0,0,0.16);
  box-sizing: border-box;
  color: inherit;
  font-family: inherit;
  font-size: 30px;
  padding: 10px 15px;
  width: 100%;

  @media(max-height:650px)
  {
    font-size: 25px;
    padding: 5px 10px;
  }
  @media(max-width:650px)
  {
    font-size: 25px;
    padding: 5px 10px;
  }

  box-shadow: 0 2px 2px 0 rgba(0,0,0,0.16), 0 0 0 1px rgba(0,0,0,0.08);
  transition: box-shadow 0.2s ease;

  &::placeholder {
    opacity: 0.5;
  }

  &:hover{
    box-shadow: 0 3px 8px 0 rgba(0,0,0,0.2), 0 0 0 1px rgba(0,0,0,0.08);
  }
`;
