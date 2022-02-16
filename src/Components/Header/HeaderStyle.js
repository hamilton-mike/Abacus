import styled from 'styled-components'

export const Header = styled.section`
    border-bottom: 1em solid gray;
`

export const Container = styled.article`
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    align-items: center
`;

export const One = styled.div `
    background: #02940D;
    width: 1em;
    height: 1em;
    border-radius: 50%;
`;

export const Two = styled.div `
    background: #4EBE4D;
    width: 1em;
    height: 1em;
    border-radius: 50%;
`;

export const LineOne = styled.div`
    margin-top: 0.5em;
    width: 0.5em;
    height: 1em;
    border-top: 2px solid #8438FF;
`;

export const LineTwo = styled.div`
    margin-top: 0.5em;
    width: 0.5em;
    height: 1em;
    border-top: 2px solid #F1d7F1;
`;

export const Logo = styled.div`
    margin: 1em 0.5em;
    display: flex;
`;

export const Arrow = styled.div`
    margin: 1em 0.5em;
`;
