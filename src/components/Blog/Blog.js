/**
 * Composant fonctionnel représentant un blog contenant une grille d'articles.
 * @author Adham Hajji
 * @version 2.0.0
 * @license MIT
 */

// -------------------------------------------------------------------------
// Librairies

import React from "react";
import { kebabCase } from "lodash";

// -------------------------------------------------------------------------
// Styles

import {
  StyledGrid,
  StyledSquare,
  StyledTag,
  ImageLink,
  OpacityLayer,
  InfoArticle,
  LinkArticle,
  InfoCreateur,
  TagsContainer,
  AuthorLink
} from "./Blog.styled";


// -------------------------------------------------------------------------
// Composant

/**
 * Composant fonctionnel représentant un blog contenant une grille d'articles.
 * @param {object} props
 * @returns {ReactElement} Blog contenant une grille d'articles.
 */
export default function Blog({ articles, limit }) {
  const articlesTemplate = articles.slice(0, limit).map((article, key) => {
    const background =
      article.frontmatter.illustration.childImageSharp.resize.src;
    const months = [
      "janvier",
      "fevrier",
      "mars",
      "avril",
      "mai",
      "juin",
      "juillet",
      "août",
      "septembre",
      "octobre",
      "novembre",
      "decembre"
    ];
    const tagsTemplate = article.frontmatter.tags.map(tag => (
      <StyledTag
        key={kebabCase(tag)}
        to={`/tags/${kebabCase(tag)}/`}
        onClick={e => {
          e.stopPropagation();
        }}
      >
        {tag}
      </StyledTag>
    ));
    return (
      <StyledSquare
        key={key}
        style={{ backgroundImage: `url("${background}")` }}
      >
        <ImageLink to={"/article" + article.fields.slug}></ImageLink>
        <OpacityLayer>
          <InfoArticle>
           <LinkArticle to={"/article" + article.fields.slug}>
              <p className="hoverOnly">{article.frontmatter.title}</p>
            </LinkArticle>
            <InfoCreateur>
              Par 
              <AuthorLink  to={`/authors/${kebabCase(article.frontmatter.author)}/`}>   
                        {" "}
                        {article.frontmatter.author}
              </AuthorLink>
              , {months[parseInt(article.frontmatter.date.slice(5, 7)) - 1]}{" "}
              {article.frontmatter.date.slice(0, 4)}
            </InfoCreateur>

            {/* <StyledP>Tags: {tagsTemplate}</StyledP> */}
          </InfoArticle>
          <TagsContainer>
            <p>{tagsTemplate}</p>
          </TagsContainer>
        </OpacityLayer>
      </StyledSquare>
    );
  });

  return <StyledGrid>{articlesTemplate}</StyledGrid>;
} // Blog()
