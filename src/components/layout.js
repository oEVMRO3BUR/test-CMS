/**
 * Composant fonctionnel représentant le layout standard du site internet.
 * @author Adham Hajji
 * @version 2.0.0
 * @license MIT
 */

// -------------------------------------------------------------------------
// Librairies

import React from "react";

// -------------------------------------------------------------------------
// Sous composants

import Helmet from "react-helmet";
import favicon from "../assets/images/favicon.ico";

import Header from "../components/Layout/Header/Header";
import Footer from "../components/Layout/Footer/Footer";
import {isIE} from "react-device-detect";

// -------------------------------------------------------------------------
// Polices d'écritures

import futuraWoff from "../assets/fonts/futura-lt.woff";
import futuraWoff2 from "../assets/fonts/futura-lt.woff2";

// -------------------------------------------------------------------------
// Style global

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@font-face {
    font-display: auto;
    font-family: 'Futura';
    src:
      url(${futuraWoff}) format('woff'),
      url(${futuraWoff2}) format('woff2');
  }
  
  :root {
    font-size: 2.3vh;

    --gris: #efefef;
    --gris-foncé: silver;
    --bleu: #1686b8;
    --rouge: #cd4442;
    --noir: #333;
  }

  body {
    color: var(--noir);
    font: 1rem 'Futura', sans-serif;
    margin: 0;
    overflow-x: hidden;
  }

  // on rapetisse le bouton original et on change son espace par rapport au bas de la page en fonction de la taille de l'écran
  .ScrollUpButton__Container{
    z-index: 1;
    width: 40px !important;
    height: 40px !important;
    @media(min-width:700px){
      bottom: 5rem !important;
    }
  }

  article table{
    text-align: center;
    margin: auto;
    border-collapse: collapse;

    @media(max-width: 768px){
      font-size: 8px;
    }
  }

  article table th{
    padding: 2px 10px;
    border-bottom: 1px solid rgba(0,0,0,0.5);

    @media(max-width: 768px){
      line-height: 10px;
    }
  }

  article table tr td:not(:last-child){
    border-right: 1px solid #DDD;
  }



  article table tr:nth-child(even){
    background-color: #DDD;
  }
  
  .blog {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  .content {
    text-align: justify;
    flex-grow: 1;
    @media(max-width:1100px){
      & h1{
        text-align: center;
      }
    }
  }
`

// -------------------------------------------------------------------------
// Composant fonctionnel

/**
 * Composant fonctionnel représentant le layout standard du site internet.
 * @param {object} props
 * @returns {ReactElement} Layout standard du site.
 */
export default function LayoutCoddity({ children }) {
  if(isIE){
    if(window.confirm("Ce blog est fièrement incompatible avec Internet Explorer. Pour voir ce site, veuillez utiliser Firefox, Chrome, Opera, ou dans le pire des cas, Edge."))
    {
      window.location="https://www.mozilla.org/fr/firefox/new/";
    }
    else{
      window.location="https://www.mozilla.org/fr/firefox/new/";
    }
    return(
      <React.Fragment>
        <Helmet>
          <link rel="shortcut icon" href={favicon} />
          <meta property="og:title" content="Blog Coddity"/>
        </Helmet>
        <p>Vous allez être redirigé sous peu.</p>
      </React.Fragment>
    );
  }else{
  return (
    <React.Fragment>
      <Helmet>
        <link rel="shortcut icon" href={favicon}/>
      </Helmet>
      <div className="blog">
        <Header />
        <GlobalStyle/>
        <div className="content">{children}</div>
        <Footer />
      </div>
    </React.Fragment>
  );
  }
}