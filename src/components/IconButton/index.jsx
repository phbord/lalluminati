import React from 'react';
import styled from 'styled-components';

const CustomButton = styled.button`
    width: 3.5rem;
    height: 3.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 0;
    border-radius: 50%;
    -webkit-transition: all 300ms ease;
    -moz-transition: all 300ms ease;
    -ms-transition: all 300ms ease;
    -o-transition: all 300ms ease;
    transition: all 300ms ease;
    cursor: pointer;
`;

const IconButton = (data) => {
    const dataObj = data.data;
    if (!dataObj.onClick) return;

    return (
        <>
            <CustomButton onClick={dataObj.onClick}
                            title={dataObj.text}
                            className={dataObj.className}>
                <img src={dataObj.icon}
                     alt={dataObj.text} />
            </CustomButton>
        </>
    );
};

export default IconButton;