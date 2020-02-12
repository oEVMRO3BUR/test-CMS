/**
 * @author Adham Hajji
 * @version 2.0.0
 * @license MIT
 */

// -------------------------------------------------------------------------
// Librairies

import styled from "styled-components";
import React from 'react';

// -------------------------------------------------------------------------
// Sous composants

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

// -------------------------------------------------------------------------
// Styles

export const Block = styled.footer`
  background-color: #CCC;
  margin-top:30px;
  padding: 10px 30px;
  text-align: left;
  
  @media (max-width:700px){
    display:none;
  }
`;

export const Link = styled.a`
  color: inherit;
  text-decoration: none;
`;

export const Paragraph = styled.p`
  display: inline-block;
  max-width: 75%;
  overflow: hidden;
  white-space: nowrap;
  font-size: 15px;
  margin: 0;
`;

const SocialList = styled.ul`
  margin:0;
  padding:0;
  max-width:25%;
  float:right;
  display:table-row;
`;

const SocialListElement = styled.li`
  display: table-cell;
  padding: 0 8px;
  vertical-align: middle;
  & *{
    font-size:15px;
    color: rgba(100, 100, 100, 0.8);
    -webkit-filter: drop-shadow(1px 4px 6px #AEAEAE);
    filter: drop-shadow(1px 4px 6px #AEAEAE);
  }
  & *:hover{
    -webkit-filter: drop-shadow(8px 8px 6px #AAA);
    filter: drop-shadow(8px 8px 6px #AAA);
  }
`;

export function SocialNetwork(){
  
  return(
    <SocialList>
      <SocialListElement key="facebook">
        <a href={"https://www.facebook.com/coddity"}
           aria-label="Coddity Facebook page">
          <FontAwesomeIcon icon={faFacebookF}/>
        </a>
      </SocialListElement>
      <SocialListElement key="twitter">
        <a href={"https://twitter.com/coddity"}
           aria-label="Coddity Twitter page">
          <FontAwesomeIcon icon={faTwitter}/>
        </a>
      </SocialListElement>
      <SocialListElement key="instagram">
        <a href={"https://www.instagram.com/instantscoddity/"}
           aria-label="Coddity Instagram page">
          <FontAwesomeIcon icon={faInstagram}/>
        </a>
      </SocialListElement>
      <SocialListElement key="linkedin">
        <a href={"https://www.linkedin.com/company/coddity"}
           aria-label="Coddity LinkedIn page">
          <FontAwesomeIcon icon={faLinkedinIn}/>
        </a>
      </SocialListElement>
      <SocialListElement key="mail">
        <a href={"mailto:contact@coddity.com"}
           aria-label="Mail to Coddity">
          <FontAwesomeIcon icon={faEnvelope}/>
        </a>
      </SocialListElement>
    </SocialList>
    );
}
