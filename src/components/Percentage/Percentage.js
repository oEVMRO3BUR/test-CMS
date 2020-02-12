/**
 * @author Victor Ronfaut
 * @version 3.0.0
 * @license MIT
 */

// -------------------------------------------------------------------------
// Librairies

import React from 'react';
import ScrollManager from 'window-scroll-manager';

// -------------------------------------------------------------------------
// Sous Composants

import { PercentageDiv, PercentageSpan } from '../Percentage/Percentage.styled';

// -------------------------------------------------------------------------
// Composant

/**
 * Composant permettant de savoir à quel pourcentage on en est dans l'article
 */
export default class StyledScrollPercentage extends React.Component{
    constructor(props){
      super(props);
      this.state={
        percentage : '0%',
        eventAdded: false,
        isHidden: true
      }
    }
  
    manager=new ScrollManager();

    /**
     * Prend en charge le défilement de l'article en récupérant la taille de l'article et la position courante du scroll
     * Afin d'éviter de faire un scroll pour un article trop court pour que ça ait du sens on met une condition if en utilisant minHeight
     * 
     * @param {Event} e
     */
    
    handleScroll=()=>{
      if(!this.state.isHidden){
      // On s'occupe d'abord de la position de la barre
        this.replacePosition();
      // On s'occupe maintenant de l'avancement de la barre
        // Hauteur total de l'article en comptant la barre de menu avec et retirant la taille de la fenêtre au tout
        let totalHeight=this.props.artOffsetHeight+this.props.artOffsetTop-window.innerHeight
        // Hauteur actuel dans le doc en comptant la position du scroll
        let percent=(window.scrollY/totalHeight)*100;
        if(percent>100){
          percent=100;
        }
        this.setState({percentage:percent+"%"});
      }
    }
    
    /**
     * Fonction qui replace le divScroll à la position voulu dans la fenêtre
     * La position du div est juste après le header de l'article
     */
    replacePosition=()=>{
      let offTop=this.props.artOffsetTop+this.props.artHeadOffsetHeight;
      let pos='absolute';
      if(offTop<window.scrollY){
        pos='fixed';
        offTop=0;
      }
      this.setState({
        offsetTop:offTop,
        position:pos
      })      
    }
    /**
     * On ajoute un listener seulement au moment où le composant est mis à jour et on instance les éléments HTML
     * On vérifie avant si la hauteur de l'article est assez grande pour qu'on instancie cette scrollbar
     * 
     * Si l'objet est déjà instancié on replace seulement le conteneur en cas notamment de resize
     * 
     * @param prevProps: les props avant mis-à-jour du composant
     */
    componentDidUpdate(prevProps){
      if(!this.state.eventAdded){
        if(this.props.artOffsetHeight>this.props.minHeight){
          // ajout des event listeners qui se déclencheront lorsqu'il y aura un scroll ou resize de la part de l'utilisateur
          window.addEventListener('window-scroll',this.handleScroll);
          window.addEventListener('resize',this.props.handleResize);
          this.setState({
            eventAdded:true,
            isHidden:false
          });
          this.replacePosition();
        }
      } else if(this.state.eventAdded && prevProps!==this.props){
        // replace le conteneur et s'assure de la bonne largeur du span
        this.handleScroll();
      }
    }
    
    /**
     * Enlève les listeners lorsque le composant est détruit afin de ne pas avoir de problème lors d'un retour à la page d'accueil
     */
    componentWillUnmount=()=>{
      window.removeEventListener('window-scroll',this.handleScroll);
      window.removeEventListener('resize',this.props.handleResize);
    }
    
    render=()=>{
      if(!this.state.isHidden){
        return(
          <PercentageDiv top={this.state.offsetTop} position={this.state.position}>
            <PercentageSpan width={this.state.percentage}/>
          </PercentageDiv>
          );
      } else{
        return null;
      }
      
    }
}