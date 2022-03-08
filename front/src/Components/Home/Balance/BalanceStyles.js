import styled from 'styled-components'

export const Balance = styled.section`
    // border: 2px solid blue;
`;

export const Article = styled.article`
    margin: 1.5em 0;
`;

export const Unordered = styled.ul`
    display: flex;
    justify-content: space-evenly;

    li {
        list-style: none;
    }
`;


export const Hero = styled.section`
    padding: 1em 2em;
`;

export const HeroArticle = styled.article`
    background-color: #8438FF;
    border-radius: 30px;

    h1, span {
        margin-left: 4em;
        padding-top: 2em;
        color: white;
    }

    span {
        font-size: 2em;
    }
`;
