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

import AtomicMain from "../../AtomicComponents/AtomicMain";

// -------------------------------------------------------------------------
// Style

export const StyledBody = styled(AtomicMain)`
  text-align: justify;
  font-size:18px;
  & h1{
    font-size:42px;
  }
  & h2{
    font-size:35px;
  }
  & h3{
    font-size:28px;
  }
  & h4{
    font-size:22px;
  }
  @media(max-width:1100px){
    padding: 0rem 2rem;
    font-size: 15px;
    & h1{
      text-align: center;
      font-size:38px;
    }
    & h2{
      font-size:30px;
    }
    & h3{
      font-size:24px;
    }
    & h4{
      font-size:19px;
    }
  }
  @media(max-width:700px){
    & h1{
      text-align: center;
      font-size:33px;
    }
    & h2{
      font-size:27px;
    }
    & h3{
      font-size:22px;
    }
    & h4{
      font-size:18px;
    }
  }
`
