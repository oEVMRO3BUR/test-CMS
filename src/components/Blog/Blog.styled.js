/**
 * @author Adham Hajji
 * @version 2.0.0
 * @license MIT
 */

// -------------------------------------------------------------------------
// Librairies

import styled from "styled-components";

// -------------------------------------------------------------------------
// Sous composants

import { Link } from "gatsby";

// -------------------------------------------------------------------------
// Styles

export const ImageLink=styled(Link)`
background-color: var(--gris);
background-size: 100%;
position: relative;
  
  &::before {
    content: "";
    display: block;
    padding-top: 70%;
  }
`;
export const LinkArticle=styled(Link)`
text-decoration: none;
& p{
  font-size:20px;
  text-align:rigth;
  @media (max-width: 900px){
    font-size:15px;
  }
  @media (max-width: 560px){
    font-size:20px;
  }
  @media (max-width: 400px){
    font-size:14px;
  }
  color:black;
  margin: 0 0 5% 0; 
  &:hover {
    color:#CD4442
  }
  font-weight: bold;
  margin:0;
  text-align:right;

`;

export const OpacityLayer=styled.div`
background-color:white;
opacity:0.9;
width:-webkit-fill-available;
padding-top:30%;
position:relative;
`;

export const InfoArticle= styled.div`
position:absolute;
top:0;
padding: 1.5% 5% 0% 5%;
width: 90%;
@media (max-width: 400px){
  padding :1.5%% 5% 0% 5%;
}
}
`;

export const TagsContainer= styled.div`
position:absolute;
bottom:0;
width:-webkit-fill-available;
padding :0% 5% 1.5% 5%;
width: 90%;
@media (max-width: 400px){
  padding :0% 5% 1.5% 5%;
}
& p{
  color:black;
  font-weight: bold;
  margin:0;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}
`;

export const StyledSquare = styled.div`
  background-color: var(--gris);
  background-size: 100%;
  position :relative;
  
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.4);
  }
  &:hover .hoverOnly {
    color: #CD4442;
  }


`;
export const InfoCreateur=styled.p`
font-size:15px;
text-align:right;
margin:0;
color:#333333;
@media (max-width: 900px){
  font-size:12px;
}
@media (max-width: 560px){
  font-size:15px;
}
@media (max-width: 400px){
  font-size:12px;
}
`;
export const AuthorLink=styled(Link)`
color:#333333;
text-decoration:none;
&:hover {
  color:#CD4442;
}
`;

/* export const StyledLink=styled(Link)`
height:75%;

`;
export const SpeDiv=styled.div`
`;
export const StyledP=styled.p`
`; */


export const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: auto;
  grid-gap: 20px;
  @media(max-width:1100px){
    padding: 0rem 1rem;
  }
  @media (min-width: 1000px) {
    grid-gap: 3rem;
  }

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`;



/* L'ordre des composants est important :
 * StyledArticle fait référence à StyledTag
 * il faut donc que StyledTag soit déclaré avant StyledArticle
 */
export const StyledTag = styled(Link)`
  text-decoration: none;
  font-size: 16px;
  display: inline-block;
  color:black;
  transition: background-color 0.5s, color 0.5s;
  &:not(:last-child) {
    margin-right: 0.5rem;
  }
  &:hover {
    color:#CD4442
  }
  @media (max-width: 900px){
    font-size:12px;
  }
  @media (max-width: 560px){
    font-size:16px;
  }
  @media (max-width: 400px){
    font-size:12px;
  }
`;