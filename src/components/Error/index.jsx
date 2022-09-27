import React from 'react';
import styled from 'styled-components';

const ErrorContainer = styled.div`
    padding: 7.25rem var(--defaultGutterSizeX) 0;
    flex-shrink: 0;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const H1 = styled.h1`
`;

const H2 = styled.h2`
`;

const Error = () => {
    return (
        <ErrorContainer>
            <H1>ERREUR 404</H1>
            <H2>Oups ! Cette page n'existe pas.</H2>
        </ErrorContainer>
    );
};

export default Error;