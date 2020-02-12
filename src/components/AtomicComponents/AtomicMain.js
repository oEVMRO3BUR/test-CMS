/**
 * Composant atomique représentant le contenu principal de la page.
 * @author Adham Hajji
 * @version 2.0.0
 * @license MIT
 */

// -------------------------------------------------------------------------
// Librairie

import styled from 'styled-components';

// -------------------------------------------------------------------------
// Sous composants

import AtomicContainer from "./AtomicContainer";

// -------------------------------------------------------------------------
// Composant atomique

const StyledMain = styled(AtomicContainer)`
  max-width: 1000px;
  height: auto;
  
  @media (min-width: 1000px) {
    margin: 3rem auto;
  }
  @media (max-width: 1000px) {
    margin: 30px auto;
  }

`

export default StyledMain;
