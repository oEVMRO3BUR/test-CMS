/**
 * Composant fonctionnel représentant la page principale du site internet.
 * @author Aurélie Cheng
 * @version 1.0.0
 * @license MIT
 */

// -------------------------------------------------------------------------
// Librairies
import React from "react";
import { graphql } from "gatsby"
import { kebabCase } from 'lodash';

// -------------------------------------------------------------------------
// Layout
import Layout from "../components/layout";

// -------------------------------------------------------------------------
// Sous composants
import AtomicMain from "../components/AtomicComponents/AtomicMain";
import AtomicLink from "../components/AtomicComponents/AtomicLink"
import "./tags-template.css"
// -------------------------------------------------------------------------
// Composant

/**
 * Composant fonctionnel représentant une liste de tous les articles corespondant au tag en question
 * @param {object} props
 * @returns {ReactElement}
 */

const Tags = ({ pageContext, data }) => {
    const { tag } = pageContext;
    const { edges, totalCount } = data.allMarkdownRemark;
    const header = `${totalCount} article${totalCount > 1 ? 's' : ''} avec le tag "${tag}"`;
    const months=['Janvier', 'Fevrier', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Decembre'];
    return (
        <Layout>
            <AtomicMain>
                <div className="mainContainer">
                <h1 className="mainTitle">{header}</h1>
                {edges.map(({ node, index }) => {
                    const { title, date } = node.frontmatter;
                    const { slug } = node.fields;
                    return (
                        <div  className="element" key={kebabCase(title)}>
                            <h3><AtomicLink href={`/article${slug}`}>{title}</AtomicLink></h3>
                            <small >{months[parseInt(date.slice(5,7))-1]} {date.slice(0,4)}</small>
                            <p >{node.excerpt}</p>
                        </div>
                    );
                })}
                
                <p className="link"><AtomicLink href={`/tags`}>Tous les tags</AtomicLink></p>
                </div>
            </AtomicMain>
        </Layout>
    )
}

export default Tags;

export const pageQuery = graphql`
    query($tag: String) {
        allMarkdownRemark(
        limit: 2000
        sort: { fields: [frontmatter___date], order: DESC }
        filter: { frontmatter: { tags: { in: [$tag] } } }
        ) {
            totalCount
            edges {
                node {
                    fields {
                        slug
                    }
                    frontmatter {
                        title
                        date
                        
                    }
                    excerpt(pruneLength: 300)
                }
            }
        }
    }
`