import styled from 'styled-components';

export const HeaderOne = styled.h1`
    margin: 1em 2em 0 2em;
`;

export const RecentSection = styled.section`
    margin: 2em 2em 1em 2em;
    height: 29.2vh;
    overflow: auto;
`;

export const Activities = styled.article`
   background-color: lightgreen;
   padding: 1em;
`;

export const Transactions = styled.div`
   display: flex;
   margin-left: 1em;
   padding-left: 1em;

   ul li {
        margin: 1em;
        list-style: none;
    }

    span {
        margin: 1.5em 0 0 1.5em;
    }

    &:hover {
        box-shadow: 4px 4px 4px 2px rgba(0, 0, 0, 0.4)
    }
`;
