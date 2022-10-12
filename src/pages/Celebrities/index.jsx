import React, { useState } from 'react';
import styled from 'styled-components';
import Data from './../../assets/data/data.json';
import { useJson } from '../../utils/hooks';
import Celebrity from '../../components/Celebrity';

const CelebritiesContainer = styled.div`
  padding: 7.25rem var(--defaultGutterSizeX) 0;
  flex-shrink: 0;
`;

const H1 = styled.h1`
  font-size: 2em;
  margin: .67em 0;
`;

const CelebritiesList = styled.ul`
  margin-top: .5rem;
  margin-bottom: .5rem;
  padding: .5rem;
`;

const CelebritiesItem = styled.li`
  list-style: none;
  margin: 0;
  padding-top: 0;
  padding-bottom: 0;
  border-bottom: var(--dark) solid 1px;
`;

const Celebrities = () => {
  const { data } = useJson(Data);
  
  return (
    <CelebritiesContainer>
      <H1>Personnalités</H1>
      <CelebritiesList className='row'>
        {
          data?.celebrities?.filter(celebrity => (celebrity.firstname && celebrity.lastname))
            .sort((a, b) => a.lastname.localeCompare(b.lastname))
            .map((celebrity, index) => (
              <CelebritiesItem key={index} className='col-xs-12 col-sm-6 col-md-3 col-lg-2'>
                <Celebrity data={celebrity}/>
              </CelebritiesItem>
            ))
        }
      </CelebritiesList>
    </CelebritiesContainer>
  );
};

export default Celebrities;