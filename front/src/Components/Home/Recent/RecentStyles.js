import styled from 'styled-components';

export const RecentSection = styled.section`
    margin: 2em 2em 5.5em 2em;
`;

export const Activities = styled.article`
    margin-top: 6em;
    margin-right: 1em;
`;

export const Transactions = styled.div`
    display: flex;
    margin-left: 1em;
    padding-left: 1em;

    ul li {
        list-style: none;
    }

    span {
        margin: 1.5em 0 0 1.5em;
    }

    &:hover {
        box-shadow: 4px 4px 4px 2px rgba(0, 0, 0, 0.4)
    }
`;
