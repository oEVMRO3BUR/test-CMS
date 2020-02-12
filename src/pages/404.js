/**
 * Composant fonctionnel représentant une page d'erreur 404.
 * @author Adham Hajji
 * @version 2.0.0
 * @license MIT
 */

// -------------------------------------------------------------------------
// Librairies

import React from "react";

// -------------------------------------------------------------------------
// Sous composants

import AtomicMain from "../components/AtomicComponents/AtomicMain";
import Helmet from "react-helmet";
// -------------------------------------------------------------------------
// Layout
import Layout from "../components/layout"

// -------------------------------------------------------------------------
// Composant

/**
 * Composant fonctionnel représentant une page d'erreur 404.
 * @return {ReactElement} Page d'erreur 404.
 */
export default function Page404() {
  return (
    <Layout>
        <Helmet>
              <title>Oups...</title>
              <meta property="og:title" content="404 - Cette page n'existe pas"/>
        </Helmet>
        <AtomicMain>
          <h1>Page introuvable</h1>
          <p>Cette route n'existe pas !</p>
        </AtomicMain>
    </Layout>
  );
}
