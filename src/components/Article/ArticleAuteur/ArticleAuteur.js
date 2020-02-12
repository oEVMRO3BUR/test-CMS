/**
 * Composant représentant les articles similaires à l'article courant.
 * @author Victor Ronfaut
 * @version 3.2.45
 * @license MIT
 */

// -------------------------------------------------------------------------
// Librairies
import { kebabCase } from "lodash";
import React from "react";

// -------------------------------------------------------------------------
// Sous composants
import {
  BoxAuthor,
  DescriptionAuthor,
  ImageAuthor,
  StyleAuthor,
  CatchPhraseMin,
  ImageLink,
  CatchPhraseMax,
  ParagraphLink
} from "./ArticleAuteur.styled";
import { StyledBody } from "../ArticleBody/ArticleBody.styled";
export default class ArticleAuteur extends React.Component {
  //on calcule la date d'arrivé de l'auteur chez Coddity
  daysWork = workDate => {
    const date = new Date();
    const baseYear = workDate.slice(0, 4);
    const baseMonth = workDate.slice(5, 7);
    const currentYear = date.getFullYear();
    const currentMonth = date.getMonth() + 1;
    const totalMonth =
      (currentYear - baseYear) * 12 + (currentMonth - baseMonth);
    let result = null;
    if (totalMonth < 1) {
      const actualDay = date.getDate();
      const workDay = parseInt(workDate.slice(8, 10), 10);
      const day = actualDay - workDay;
      if (day <= 1) {
        result = String(day.toString() + " jour");
      } else {
        result = String(day.toString() + " jours");
      }
    } else if (totalMonth >= 24) {
      const year = date.getFullYear() - parseInt(workDate.slice(0, 4));
      result = String(year.toString() + " ans");
    } else {
      result = String(totalMonth.toString() + " mois");
    }
    return result;
  };

  render() {
    const { info,displayLinks } = this.props;
    return (
      <StyledBody>
        {info.edges.map((el, index) => {
          //on regarde si la personne est fondateur de Coddity ou un ex employé
          //dans ce cas de figure on indique pas sa date d'arrivée
          let stillWork = true;
          if (el.node.frontmatter.title.slice(0, 2).toLowerCase() === "ex") {
            stillWork = false;
          }
          if(el.node.frontmatter.title.slice(0,12).toLowerCase() === "co-fondateur")
          {
            stillWork = false;
          }
          return (
            <StyleAuthor key={index}>
              <BoxAuthor>
                {displayLinks && <ImageLink to={`/authors/${kebabCase(el.node.frontmatter.author)}/`}>
                  {" "}
                  <ImageAuthor className="linkAuthor" src={el.node.frontmatter.illustration.childImageSharp.resize.src} alt="image de l'auteur" />
                </ImageLink>}
                   {!displayLinks &&
                     <ImageAuthor src={el.node.frontmatter.illustration.childImageSharp.resize.src} alt="image de l'auteur" />
                   }
                <DescriptionAuthor>
                {displayLinks && <p><ParagraphLink to={`/authors/${kebabCase(el.node.frontmatter.author)}/`} >
                    {el.node.frontmatter.author} </ParagraphLink> </p>}
                {!displayLinks &&  <p>
                    {el.node.frontmatter.author}</p>}
                  <p>
                    {" "}
                    {el.node.frontmatter.title}{" "}
                    {stillWork && "chez Coddity depuis "+this.daysWork(el.node.frontmatter.date)}{" "}
                  </p>
                  <CatchPhraseMax>
                     {el.node.frontmatter.excerpt && <span> &#34;	{el.node.frontmatter.excerpt } &#34;	</span> }
                  </CatchPhraseMax>
                </DescriptionAuthor>
              </BoxAuthor>
              <CatchPhraseMin>
                {el.node.frontmatter.excerpt && <span> &#34;	{el.node.frontmatter.excerpt } &#34;	</span> }
              </CatchPhraseMin>
            </StyleAuthor>
          );
        })}
      </StyledBody>
    );
  }
}

