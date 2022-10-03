import React from 'react';
import styled from 'styled-components';
//import Data from './../../assets/data/data.json';
import { useFetch, useScrollToTop } from '../../utils/hooks';
import { goToTop } from "../../utils/functions";
import TopArrowIcon from './../../assets/images/top-arrow.svg';
import Article from '../../components/Article';
import IconButton from '../../components/IconButton';

const ArticleContainer = styled.div`
    padding: 7.25rem var(--defaultGutterSizeX) 0;
    flex-shrink: 0;
`;

const ArticleList = styled.ul`
    margin-top: .5rem;
    margin-bottom: .5rem;
    padding: .5rem;
`;

const ArticleItem = styled.li`
    list-style: none;
    margin: 0;
    padding-top: 0;
    padding-bottom: 0;
`;

const ArticleLink = styled.button`
    height: 100%;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: stretch;
    border: 0;
    background-color: transparent;
    color: var(--dark);
    text-decoration: none;
    cursor: pointer;

    &:hover {
      article {
        border: var(--yellow) solid 1px;
        background-color: var(--yellow);
        -webkit-transition: all 300ms ease;
        -moz-transition: all 300ms ease;
        -ms-transition: all 300ms ease;
        -o-transition: all 300ms ease;
        transition: all 300ms ease;
      }

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
  //const { data } = useJson(Data);
  const { data, isLoading, error } = useFetch('https://json.extendsclass.com/bin/54b5ad0d13e0');
  const { showTopBtn } = useScrollToTop();

  const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const topScrollButtonData = {
    text: "Haut de page",
    icon: TopArrowIcon,
    className: "top-scroll-button",
    onClick: () => goToTop()
  };

  return (
    <ArticleContainer className="App">
      <ArticleList className='row'>
        {
          data?.articles?.filter(article => (article.title && article.link))
            .map((article, index) => (
              <ArticleItem key={index}
                           className='col-xs-12 col-sm-6 col-md-3'>
                <ArticleLink onClick={() => openInNewTab(article.link)}>
                  <Article data={article}
                           key={index}/>
                </ArticleLink>
              </ArticleItem>
            )
          )
        }
      </ArticleList>
      {
        showTopBtn && (<IconButton data={topScrollButtonData}/>)
      }
    </ArticleContainer>
  );
};

export default Home;