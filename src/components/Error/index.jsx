import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import PrevArrowIcon from './../../assets/images/prev-arrow.svg';
import IconButton from './../IconButton';

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
    margin: 0 0 var(--defaultGutterSizeY);
`;

const H2 = styled.h2`
    margin: 0 0 2.25rem;
`;

const Error = () => {
    let navigate = useNavigate();

    const PreviousButtonData = {
        text: "Retour",
        icon: PrevArrowIcon,
        className: "prev-scroll-button",
        onClick: () => navigate(`/`)
    };

    return (
        <ErrorContainer>
            <H1>ERREUR 404</H1>
            <H2>Oups ! Cette page n'existe pas.</H2>
            <IconButton data={PreviousButtonData}/>
        </ErrorContainer>
    );
};

export default Error;