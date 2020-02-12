/**
 * Composant représentant une zone de recherche.
 * @author Adham Hajji
 * @version 2.0.0
 * @license MIT
 */

// -------------------------------------------------------------------------
// Librairies

import React from "react";
import Fuse from "fuse.js";

// -------------------------------------------------------------------------
// Sous composants

import SearchBar from "./SearchBar/SearchBar";
import SearchResults from "./SearchResults/SearchResults";

// -------------------------------------------------------------------------
// Composant

/**
 * @class
 * @classdesc Composant représentant une zone de recherche.
 */
export default class Search extends React.Component {
  /**
   * Constructeur du composant.
   * @constructor
   * @param {Object} props
   */
  constructor(props) {
    super(props);

    this.state = {
      query: "",
      results: []
    };

    // Note : Il s'agit du moteur de recherche de tag
    this.searchEngine = new Fuse(props.articles, {
      shouldSort: true,
      tokenize: true,
      threshold: 0.4,
      keys: ["frontmatter.title","frontmatter.tags"]
    });
  } // constructor()

  /**
   * Lifecycle Hook appelé lorsque la requête a été modifiée.
   * @param {object} prevProps
   * @param {object} prevState
   */
  componentDidUpdate(_, prevState) {
    if (prevState.query !== this.state.query) {
      this.searchQuery();
    }
  } // componentWillUpdate()

  /**
   * Event Handler appelé lorsque l'utilisateur entre quelque chose dans la barre de recherche.
   * @param {Event} event
   */
  handleInputOnChange = event => {
    this.setState({
      query: event.target.value.trim()
    });
  }; // handleInputOnChange()

  /**
   * Fonction qui effectue la recherche de tags en interne et modifie l'état du composant en conséquence.
   */
  searchQuery=()=>{ 
    this.setState({
      results: this.state.query !== "" ? this.searchEngine.search(this.state.query) : []
    });
  } // searchQuery()

  /**
   * Fonction de rendu du composant.
   * @returns {ReactElement} Une zone de recherche.
   */
  render() {
    return (
      <React.Fragment>
        <SearchBar handleInputOnChange={this.handleInputOnChange} />
        <SearchResults results={this.state.results} />
      </React.Fragment>
    );
  } // render()
} // Search
