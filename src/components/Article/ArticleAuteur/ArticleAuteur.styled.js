/**
 * @author Adham Hajji
 * @version 2.0.0
 * @license MIT
 */

// -------------------------------------------------------------------------
// Librairies

import styled from "styled-components";
import { Link } from "gatsby";
// -------------------------------------------------------------------------
// Sous composants


// -------------------------------------------------------------------------
// Style
export const StyleAuthor=styled.div`   

  width:100%;
  background-color: #eeeeee;
`

export const BoxAuthor=styled.div`
    display: flex;
    flex-direction:row;
    text-decoration:none;    
`
//style qui s'appliquant sur la description de l'auteur
export const DescriptionAuthor=styled.div`
   display:flex;
   flex-direction:column;
   margin: 0% 2.5% 0% 2.5%;
   & p{
    font-size:16px;
    text-align:left;
    color: black;
    margin:0 0 20px 0;
    & :first-child{
      font-weight:bold;
      margin-top:10px;
      margin-bottom:2px;
      font-size:20px;  

    }
    & Link{
      text-decoration:none;
    }
    @media(max-width:500px)
    {
      font-size:14px;
      margin-bottom:0px;
    }
    
 }
`
//phrase qui s'affiche seulement en mode mobile(si la largeur est basse)
//se situe en dessous de l'auteur
export const CatchPhraseMin=styled.p`   
font-size:16px;
text-align:left;
margin-top:5px;
color: black;
font-style: italic;
@media(min-width:650px){
  display:none;
 }
 @media(max-width:500px)
    {
      font-size:14px;
    }
`
//phrase qui s'affiche en mode desktop (si la largeur est grande)
export const CatchPhraseMax=styled.p`   

font-style: italic;
@media(max-width:650px){
  display:none;
 }
`

export const ImageLink=styled(Link)`
height:150px;
&:hover .linkAuthor{
  height:135px;
  margin:5px 10px 5px 10px;
  padding:0;
  box-shadow: 10px 5px 5px rgba(0,0,0,0.5);
}
@media(max-width:650px){
  height:100px;
 }
`
export const ParagraphLink=styled(Link)`
color:#333333;
text-decoration:none;
&:hover{
  color:var(--rouge);
}
`

export const ImageAuthor=styled.img`   

height:140px;
padding-top:5px;
padding-left: 5px;
@media(max-width:650px){
  height:90px;
 }
`