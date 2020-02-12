/**
 * Composant représentant une barre de recherche.
 * @author Adham Hajji
 * @version 2.0.0
 * @license MIT
 */

// -------------------------------------------------------------------------
// Librairies

import React from "react";

// -------------------------------------------------------------------------
// Styles

import { StyledSearchInput } from "./SearchBar.styled";

// -------------------------------------------------------------------------
// Composant

/**
 * @class
 * @classdesc Composant représentant une barre de recherche.
 */
class SearchBar extends React.Component {
  /**
   * Constructeur du composant.
   * @constructor
   * @param {object} props
   */
  constructor(props) {
    super(props);

    this.state = {
      query: ""
    };
  } // constructor()

  /**
   * Fonction de rendu du composant.
   * @returns {ReactElement} Une barre de recherche.
   */
  render() {
    return (
      <StyledSearchInput
        onChange={event => this.props.handleInputOnChange(event)}
        placeholder="Rechercher"
        aria-label="Search bar"
      />
    );
  } // render()
} // SearchBar

export default SearchBar;
