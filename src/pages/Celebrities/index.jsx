import React, { useContext } from 'react';
import styled from 'styled-components';
import Data from './../../assets/data/data.json';
import { useJson, useScrollToTop } from '../../utils/hooks';
import { goToTop } from "../../utils/functions";
import { SortCelebritiesContext } from '../../utils/context';
import TopArrowIcon from './../../assets/images/top-arrow.svg';
import IconButton from '../../components/IconButton';
import Celebrity from '../../components/Celebrity';
import SortCelebrities from '../../components/SortCelebrities';

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
  const { showTopBtn } = useScrollToTop();
  const { sortCelebrities } = useContext(SortCelebritiesContext);

  const topScrollButtonData = {
    text: "Haut de page",
    icon: TopArrowIcon,
    className: "top-scroll-button",
    onClick: () => goToTop()
  };
  
  return (
    <CelebritiesContainer>
      <H1>Personnalités</H1>
      <SortCelebrities/>
      <CelebritiesList className='row'>
        {
          data?.celebrities?.filter(celebrity => (celebrity.firstname && celebrity.lastname))
            .sort((a, b) => sortCelebrities === 'firstname' ? a.firstname.localeCompare(b.firstname) : a.lastname.localeCompare(b.lastname))
            .map((celebrity, index) => (
              <CelebritiesItem key={index} className='col-xs-12 col-sm-6 col-md-3 col-lg-2'>
                <Celebrity data={celebrity}/>
              </CelebritiesItem>
            ))
        }
      </CelebritiesList>
      {
        showTopBtn && (<IconButton data={topScrollButtonData}/>)
      }
    </CelebritiesContainer>
  );
};

export default Celebrities;

function _sortCelebrity(a, b) {

}