import React from 'react';
import styled from 'styled-components';
import Data from './../../assets/data/data.json';
import { useJson, useScrollToTop } from '../../utils/hooks';
import { openInNewTab } from '../../utils/functions/index';
import { goToTop } from "../../utils/functions";
import TopArrowIcon from './../../assets/images/top-arrow.svg';
import Article from '../../components/Article';
import IconButton from '../../components/IconButton';

const Container = styled.section`
    padding: 7.25rem 0 0;
    flex-shrink: 0;
`;

const Ul = styled.ul`
  padding: var(--articleMargin) 0 0;
`;

const Li = styled.li`
    list-style: none;
    padding: 0 0 0 var(--itemPaddingLeft);
`;

const Link = styled.button`
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0 var(--defaultGutterSizeX);
    display: flex;
    flex-direction: column;
    border: 0;
    background-color: transparent;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      -webkit-transition: all 300ms ease;
      -moz-transition: all 300ms ease;
      -ms-transition: all 300ms ease;
      -o-transition: all 300ms ease;
      transition: all 300ms ease;

      .article-photo {
        opacity: .75;
        -webkit-transition: all 300ms ease;
        -moz-transition: all 300ms ease;
        -ms-transition: all 300ms ease;
        -o-transition: all 300ms ease;
        transition: all 300ms ease;
      }
    }
`;

const Home = () => {
  const { data } = useJson(Data);
  const { showTopBtn } = useScrollToTop();

  const topScrollButtonData = {
    text: "Haut de page",
    icon: TopArrowIcon,
    className: "top-scroll-button",
    onClick: () => goToTop()
  };

  return (
    <Container>
      <Ul>
        {
          data?.articles?.filter(article => (article.title && article.link))
            .map((article, index) => (
              <Li key={index} className={article.important ? 'important-article' : 'default-article'}>
                <Link onClick={() => openInNewTab(article.link)}>
                  <Article data={article}
                           key={index}/>
                </Link>
              </Li>
            )
          )
        }
      </Ul>
      {
        showTopBtn && (<IconButton data={topScrollButtonData}/>)
      }
    </Container>
  );
};

export default Home;