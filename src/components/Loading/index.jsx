import React from 'react';
import styled from 'styled-components';
import Globe from './../../assets/images/globe.gif'

const LoadingContainer = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 500;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgba(255, 255, 255, .75);
    -webkit-transition: all 300ms ease;
    -moz-transition: all 300ms ease;
    -ms-transition: all 300ms ease;
    -o-transition: all 300ms ease;
    transition: all 300ms ease;
`;

const LoadingIcon = styled.img`
    width: 4.75rem;
    margin-bottom: 2rem;
`;

const LoadingText = styled.div`
    font-size: 2.5rem;
    font-weight: 700;
`;

const Loading = () => {
    const textLoading = "Chargement...";

    return (
        <LoadingContainer>
            <LoadingIcon src={Globe} alt={textLoading}/>
            <LoadingText>{textLoading}</LoadingText>
        </LoadingContainer>
    );
};

export default Loading;