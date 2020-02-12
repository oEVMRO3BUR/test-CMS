/**
 * Composant représentant un menu moderne.
 * @author Adham Hajji
 * @version 2.0.0
 * @license MIT
 */

// -------------------------------------------------------------------------
// Librairies

import React from "react";

// -------------------------------------------------------------------------
// Styles

import { StyledBurgerButton, StyledHiddenPanel, StyledPanelContent, StyledLink, Paragraph,Title } from "./HeaderBurger.styled";

import "./hamburgers.css";

// -------------------------------------------------------------------------
// Composant

/**
 * @class
 * @classdesc Composant qui représente un menu burger.
 */
export default class HeaderMenu extends React.Component {
  /**
   * Constructeur du composant.
   * @constructor
   * @param {object} props
   */
  constructor(props) {
    super(props);
    this.state = {
      active: false
    };
  } // constructor()

  /**
   * Event handler appelé lorsque l'utilisateur clique sur le bouton du menu burger.
   */
  handleOnClick = () => {
    this.setState(prevState => ({
      active: !prevState.active
    }));
  }; // handleOnClick()

  /**
   * Fonction de rendu du composant.
   * @returns {ReactElement} Un menu burger.
   */
  render() {
    return (
      <React.Fragment>
        <StyledBurgerButton
          className={
            "hamburger hamburger--emphatic " +
            (this.state.active === true ? "is-active" : "")
          }
          onClick={this.handleOnClick}
          aria-label="burger button"
        >
          <span className="hamburger-box">
            <div className="hamburger-inner" />
          </span>
        </StyledBurgerButton>
        <StyledHiddenPanel show={this.state.active}>
          <StyledPanelContent align="center">
            <Title>La Grelotine</Title>
            <Paragraph>C'est un jeu du Pays de Galles. Ça se joue avec des lentilles ou des haricots.
              Le premier qui annonce la mise il dit, mettons, lance de 16 ou lance de 32 ou une quadruplée,
              comme on appelle, c'est une lance de 64. Parce qu'on avance toujours de 16 en 16 sauf pour les demi coups.
              Là celui qui est à sa gauche : soit il augmente au moins de 4 ; soit il passe et il dit "passe grelot" ;
              soit il parie qu'il va monter au moins de 6 ou de 7 et il peut tenter la Grelotine.
              A ce compte là, il joue pas, il attend le tour d'après.
              Et si le total des mises des deux autres suffit pas à combler l'écart il gagne sa Grelotine.
              Et on recommence le tour avec des mises de 17 en 17.
              Mettons, le suivant il annonce une quadruplée, donc là elle vaut 68.
              Il peut contrer ou il se lève et il tape sur ses haricots en criant "grelot, ça picote" !
              Et il tente la relance jusqu'au tour d'après.
            </Paragraph>
            &nbsp;
            <Paragraph>Et sinon, chez Coddity on écrit des articles. Parfois.</Paragraph>
            <Paragraph>Pour essayer notre thérémine, pour dire bonjour ou boire un coup(*), passez au <StyledLink href="https://goo.gl/maps/iwYKAEHxsCn">37bis rue de Montreuil, 75011 Paris la capitale</StyledLink>.</Paragraph>
            <Paragraph><i>* Dans la limite des stocks disponibles, voir conditions en magasin.</i></Paragraph>
            <Paragraph><StyledLink href="https://coddity.com">Coddity.com</StyledLink></Paragraph>
          </StyledPanelContent>
        </StyledHiddenPanel>
      </React.Fragment>
    );
  } // render()
} // HeaderMenu
