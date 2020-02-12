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

export const StyledBar = styled.header`
  align-items: center;
  background-color: var(--gris);
  display: flex;
  justify-content: space-between;
  padding: 15px;
  height: 75px;
  @media(max-height:650px)
  {
    height: 45px
  }
  position: relative;
  z-index: 999;
`;

export const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`;

export const StyledBrand = styled.div`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  vertical-align: center;
  svg:first-child {
    height: 50px;
    @media(max-height:650px)
    {
      height: 30px;
    }
    @media(max-width:450px)
    {
      height: 30px;
    }
    width: auto;
    margin-right: 10px;
    white-space: normal;
  }

  & .CoddityText {
    height: 25px;
    @media(max-height:650px)
    {
      height: 20px;
    }
    @media(max-width:450px)
    {
      height: 20px;
    }

    width: auto;
    white-space: normal;
    @media(max-width:425px){
      display:none;
    }
  }

  & .BlogText {
    height:25px;
    @media(max-height:650px)
    {
      height: 20px;
    }
    @media(max-width:450px)
    {
      height: 20px;
    }

    width: auto;
  }
`;
