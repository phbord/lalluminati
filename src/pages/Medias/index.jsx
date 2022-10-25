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

const Container = styled.section`
  padding: 7.25rem 0 0;
  flex-shrink: 0;
`;

const TitleContainer = styled.div`
  padding: 0 var(--defaultGutterSizeX) 0 calc(var(--itemPaddingLeft) + var(--defaultGutterSizeX));
  display: flex;
  flex-direction: column;
`;

const TitleSubContainer = styled.div`
  width: 100%;
  max-width: var(--containerColumnWidth);
`;

const H1 = styled.h1`
  font-size: 2em;
  margin: 3rem 0 .67em;
`;

const Ul = styled.ul`
  padding: var(--articleMargin) 0 0;
`;

const Li = styled.li`
  list-style: none;
  padding: 0 0 0 var(--itemPaddingLeft);
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid var(--yellow);

  &:first-child {
    border-top: 1px solid var(--yellow);
  }
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
    <Container>
      <TitleContainer>
        <TitleSubContainer>
          <H1>Médias</H1>
          <SortMedias/>
        </TitleSubContainer>
      </TitleContainer>
      <Ul>
        {
          data?.medias?.filter(media => (media.name && media.type))
            .sort((a, b) => sortMedias === 'type' ? a.type.localeCompare(b.type) : a.name.localeCompare(b.name))
            .map((media, index) => (
              <Li key={index}>
                <Media data={media}/>
              </Li>
            ))
        }
      </Ul>
      {
        showTopBtn && (<IconButton data={topScrollButtonData}/>)
      }
    </Container>
  );
};

export default Medias;