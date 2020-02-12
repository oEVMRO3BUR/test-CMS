/**
 * Composant représentant les articles similaires à l'article courant.
 * @author Victor Ronfaut
 * @version 3.2.45
 * @license MIT
 */

// -------------------------------------------------------------------------
// Librairies

import React from 'react';

// -------------------------------------------------------------------------
// Sous composants

import { 
    Date,
    MainTitle,
    Title,
    Container,
    ArticleContent,
    ArticleDetails,
    Author,
    Paragraph,
    ArticleLink
} from "./SimilarArticles.styled";

// -------------------------------------------------------------------------
// Composants

export default class SimilarArticles extends React.Component{
    /**
     * Traite les articles ayant des tags en commun avec un score de tags en commun.
     * On ne retient que trois articles et on écarte de la liste l'article actuel.
     * @returns la liste d'articles à afficher dans notre grille
     */
    orderArticlesByScores = () => {
        let similarArticles = this.props.articles.filter(article => article.node.frontmatter.title !== this.props.title );
        let tags = this.props.tags.map(tag => tag.toLowerCase());
        // on regarde le nombre de tags en commun avec l'article courant
        let scoresTab = similarArticles.map((article) => {
                article = article.node.frontmatter.tags.reduce( (score,tag) => {
                    if( tags.includes(tag.toLowerCase())) score++;
                });
        });
        // tant qu'il y a plus de 3 articles dans la liste, on enlève celui ayant le score le plus bas
        // on ne se préoccupe pas du cas où les scores sont ex-aequo
        while( similarArticles.length>3 ){
            let index = scoresTab.findIndex(() => Math.min(...scoresTab));
            similarArticles.splice(index,1);
            scoresTab.splice(index,1);
        }
        return similarArticles;
    }

    render(){
        const similarArticlesOrdered = this.orderArticlesByScores();
        
        if(similarArticlesOrdered.length>0){
            const articlesTemplate = similarArticlesOrdered.map((article) => {
                return (
                <ArticleContent key={article.node.fields.slug}>
                    <ArticleLink to={`/article${article.node.fields.slug}`}>
                        <ArticleDetails>
                            <Title>{article.node.frontmatter.title}</Title>
                            <Author>par {article.node.frontmatter.author}</Author>
                            <Date>{article.node.frontmatter.date}</Date>
                        </ArticleDetails>
                        <Paragraph>{article.node.frontmatter.excerpt}</Paragraph>
                    </ArticleLink>
                </ArticleContent>
                );
            });
            
            return(
                <Container>
                    <MainTitle>Sur le même sujet :</MainTitle>
                    <div>{articlesTemplate}</div>
                </Container>
            );
        }
        return null;
    }
}