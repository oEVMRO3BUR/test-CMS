/**
 * Composant fonctionnel représentant la page principale du site internet.
 * @author Aurélie Cheng
 * @version 1.0.0
 * @license MIT
 */

// -------------------------------------------------------------------------
// Librairies

import React from "react";
import { kebabCase } from 'lodash';
import { graphql } from "gatsby";

// -------------------------------------------------------------------------
// Layout
import Layout from "../components/layout"

// -------------------------------------------------------------------------
// Sous composants

import AtomicMain from "../components/AtomicComponents/AtomicMain";
import AtomicLink from "../components/AtomicComponents/AtomicLink"
import "../assets/tags.css"
// -------------------------------------------------------------------------
// Composant

/**
 * Composant fonctionnel représentant la liste de tous les tags utilisés
 * @param {object} props
 * @returns {ReactElement}
 */

const TagsIndex = ({ data }) => {
    const { group } = data.allMarkdownRemark;
    return (
        <Layout>
            <AtomicMain>
                <div className="mainContainer">
                <h1>Tous les tags</h1>
                <ul>
                    {group.map((tag, index) => (
                        <li key={index}>
                            <AtomicLink className="link" href={`/tags/${kebabCase(tag.fieldValue)}/`}>
                                {tag.fieldValue} ({tag.totalCount})
                            </AtomicLink>
                        </li>
                    ))}
                </ul>
                </div>
            </AtomicMain>
        </Layout>
    );
};

export default TagsIndex;

export const query = graphql `
    query {
        allMarkdownRemark (filter: {frontmatter: {tags: {ne: "author"}}}) {
            group(field: frontmatter___tags) {
                fieldValue
                totalCount
            }
        }
    }
`