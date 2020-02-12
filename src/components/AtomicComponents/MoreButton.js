/**
 * Composant atomique représentant un lien.
 * @author Victor Ronfaut
 * @version 3.0.0
 * @license MIT
 */

// -------------------------------------------------------------------------
// Librairies

import styled from "styled-components";

// -------------------------------------------------------------------------
// Composant atomique

const MoreButton = styled.button`
    cursor: pointer;
    font: inherit;
    font-size: 1em;
    font-weight: bold;
    letter-spacing: 2px;
    line-height: 1.5em;
    display : ${props => props.display};
    width : 60%;
    border-radius: 5px;
    margin-top: 30px;
    margin-right: auto;
    margin-left: auto;
    padding: 10px 20px;
    border: none;
    background-color: #e64c4a;
    color: #EEE; 
    transition: background-color 0.3s ease;

    &:hover {
        background-color:  #cd4442;
    }

    @media (max-width: 1000px){
        border-radius: 0;
        margin: 0;
        width : 90%;
        margin: 20px 5% 0 5%
    }
`;

export default MoreButton;
