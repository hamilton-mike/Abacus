import styled from 'styled-components';

export const Section = styled.section`
    overflow: hidden;
    height: 100vh;
    background: linear-gradient(to bottom, #4EBE4D, #F1D7F1)

`;

export const Article = styled.article`
    padding: 5em 5em 0 5em;

    p {
        margin: 0;
    }
`;

export const FormDiv = styled.div`
    text-align: center;
`;

export const Radio = styled.div`
    display: flex;
    width: 30em;
    margin: 3em 0;

    p {
        font-size: 14px;
        margin-left: 1em;
    }
`;

export const FormSection = styled.div`
    margin: 1em 0;
`;

export const InputStyle = styled.input`
    width: 100%;
    padding: 0.6em;
    border: 2px solid #6D727A;
`;

export const Percentage = styled.div`
    padding: 1em 0;

    p {
        margin: 2em 0;
    }
`;
