/**
 * @author Victor Ronfaut
 * @version 3.2.45
 * @license MIT
 */

// -------------------------------------------------------------------------
// Librairies

import styled from "styled-components";
import { Link } from "gatsby";

// -------------------------------------------------------------------------
// Styles - Titre & co

export const MainTitle = styled.h1`
  display: inline-block:
  text-align: center;
  font-size:40px;
  @media(max-width:400px)
  {
    font-size:30px;
  }
`;

export const Title = styled.h2`
  display:inline;
  font-size:25px;
  @media(max-width:800px)
  {
    font-size:20px;
  }
`;

export const StyledH3 = styled.h3`
  margin: 0;
  line-height: 14px;
  font-size
  @media(max-width:800px)
  {
    font-size:10px;
  }
`;

export const ArticleDetails = styled.div`
  margin: 10px 0;
  line-height: 20px;
`;

export const Date = styled.span`
  display: block;
  color: #444;
  font-size: 14px;
  @media(max-width:800px)
  {
    font-size:12px;
  }
`;

export const Author = styled.h2`
  margin-left: 8px;
  font-size: 20px;
  color: #888;
  display: inline;
  @media(max-width:800px)
  {
    font-size:16px;
  }
`;

export const StyledTag = styled.span`
  text-decoration: underline;
  font-size: 18px;
  &:not(:last-child) {
    margin-right: 14px;
  }
`;

export const Paragraph = styled.p`
  margin: 0;
  line-height:20px;
  font-size:18px;
  @media(max-width:800px)
  {
    line-height:15px;
    font-size:16px;
  }
`;

// -------------------------------------------------------------------------
// Styles - Conteneurs

export const Container = styled.div`
    border-top: 1px solid #333;
    margin: 1rem 10%;
    margin-bottom: 1rem;

    @media (min-width: 1024px) {
        margin: 1rem 25%;
    }

    @media (max-width: 550px) {
        margin: 1rem 0.2rem;
    }
`;

export const ArticleContent = styled.div`
  margin-bottom: 1rem;
`;

export const ArticleLink = styled(Link)`
  display: block;
  width: 100%
  height: 100%;
  text-decoration: none;
  color: #222;
  padding: 1rem 2rem;
  background-color: #EEE;
  border-left: 4px solid #cd4442;
  border-radius: 4px;

  &:hover{
    background-color: #DDD;
  }
`;