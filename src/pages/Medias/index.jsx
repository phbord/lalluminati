import React, { useContext } from 'react';
import styled from 'styled-components';
import Data from './../../assets/data/data.json';
import { useJson, useScrollToTop } from '../../utils/hooks';
import { goToTop } from "../../utils/functions";
import { SortMediasContext } from '../../utils/context';
import TopArrowIcon from './../../assets/images/top-arrow.svg';
import IconButton from '../../components/IconButton';
import Media from '../../components/Media';
import SortMedias from '../../components/SortMedias';

const MediasContainer = styled.div`
  padding: 7.25rem var(--defaultGutterSizeX) 0;
  flex-shrink: 0;
`;

const H1 = styled.h1`
  font-size: 2em;
  margin: .67em 0;
`;

const MediasList = styled.ul`
    margin-top: .5rem;
    margin-bottom: .5rem;
    padding: .5rem;
`;

const MediasItem = styled.li`
  list-style: none;
  margin: 0;
  padding-top: 0;
  padding-bottom: 0;
`;

const Medias = () => {
  const { data } = useJson(Data);
  const { showTopBtn } = useScrollToTop();
  const { sortMedias } = useContext(SortMediasContext);

  const topScrollButtonData = {
    text: "Haut de page",
    icon: TopArrowIcon,
    className: "top-scroll-button",
    onClick: () => goToTop()
  };

  return (
    <MediasContainer>
      <H1>Médias</H1>
      <SortMedias/>
      <MediasList className='row'>
        {
          data?.medias?.filter(media => (media.name && media.type))
            .sort((a, b) => sortMedias === 'type' ? a.type.localeCompare(b.type) : a.name.localeCompare(b.name))
            .map((media, index) => (
              <MediasItem key={index} className='col-xs-12 col-sm-6 col-md-3'>
                <Media data={media}/>
              </MediasItem>
            ))
        }
      </MediasList>
      {
        showTopBtn && (<IconButton data={topScrollButtonData}/>)
      }
    </MediasContainer>
  );
};

export default Medias;