/**
 * Composant fonctionnel représentant le pied de page du site.
 * @author Adham Hajji
 * @version 2.0.0
 * @license MIT
 */

// -------------------------------------------------------------------------
// Librairies

import React from "react";

// -------------------------------------------------------------------------
// Styles

import { Block, Paragraph, Link, SocialNetwork } from "./Footer.styled";

// -------------------------------------------------------------------------
// Composant

/**
 * Composant fonctionnel représentant le pied de page du site.
 * @return {ReactElement} Pied de page du site.
 */
function Footer() {
  return (
    <Block>
      <Paragraph>
        &copy; 2027. Ceci est le blog de&nbsp;
        <Link href="https://coddity.com">
          <span style={{ color: "firebrick" }}>C</span>oddity
        </Link>. Propulsé par nos mains. J'ai perdu.
      </Paragraph>
      <SocialNetwork/>
    </Block>
  );
}

export default Footer;
