/**
 * Composant fonctionnel représentant la couverture de l'article.
 * @author Adham Hajji
 * @version 2.0.0
 * @license MIT
 */

// -------------------------------------------------------------------------
// Librairies

import React from "react";
import { kebabCase } from 'lodash';
// -------------------------------------------------------------------------
// Sous composants

import Img from "gatsby-image";
import { AtomicH1  } from "../../AtomicComponents/AtomicTitles";

// -------------------------------------------------------------------------
// Styles

import {
  StyledContainer,
  StyledBackgroundLayer,
  StyledDetailsLayer,
  StyledSubtitle,
  StyledTag,
  StyledTitle,
  StyledLink
} from "./ArticleFrontmatter.styled";

// -------------------------------------------------------------------------
// Composant

/**
 * Composant fonctionnel représentant la couverture de l'article.
 * @param {object} props
 * @return {ReactElement} Couverture de l'article.
 */
class ArticleFrontmatter extends React.Component{
  render(){
    const tagsTemplate = this.props.tags.map(tag => (
      <StyledTag key={kebabCase(tag)} to={`/tags/${kebabCase(tag)}/`}>{tag}</StyledTag>
      ));
    return (
      <StyledContainer ref={this.props.innerRef}>
        <StyledBackgroundLayer>
          <Img fluid={this.props.backgroundSizes} />
        </StyledBackgroundLayer>
        <StyledDetailsLayer>
         <StyledTitle>{this.props.title}</StyledTitle>
          <p>{tagsTemplate}</p>
          <StyledSubtitle>
            <time pubtime={this.props.date}>
              Publié le {this.props.date} par <StyledLink to={`/authors/${kebabCase(this.props.author)}/`}>{this.props.author}</StyledLink> 
            </time>
          </StyledSubtitle>
        </StyledDetailsLayer>
      </StyledContainer>
    );
  }
}

export default React.forwardRef((props, ref) => <ArticleFrontmatter innerRef={ref} {...props} />);