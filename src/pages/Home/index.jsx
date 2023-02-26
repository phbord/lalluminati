import React, { useState } from 'react';
import styled from 'styled-components';
import Data from './../../assets/data/data.json';
import { useJson, useScrollToTop } from '../../utils/hooks';
import { openInNewTab } from '../../utils/functions/index';
import { goToTop } from "../../utils/functions";
import TopArrowIcon from './../../assets/images/top-arrow.svg';
import Article from '../../components/Article';
import IconButton from '../../components/IconButton';
import Pagination from '../../components/Pagination';

const Container = styled.section`
    padding: 7.25rem 0 0;
    flex-shrink: 0;
`;

const Ul = styled.ul`
  padding: var(--articleMargin) 0 0;
`;

const Li = styled.li`
    list-style: none;
`;

const Link = styled.button`
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0 var(--defaultGutterSizeX);
    display: flex;
    flex-direction: column;
    align-items: center;
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
  const { showTopBtn } = useScrollToTop();
  const { data } = useJson(Data);
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(10);
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = data?.articles?.filter(article => (article.title && article.link)).slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages = Math.ceil(data?.articles?.filter(article => (article.title && article.link)).length / recordsPerPage)
  console.log(typeof data.articles, '//', data?.articles);
  console.log(typeof currentRecords, '/// currentRecords:', currentRecords);
  console.log('---> nPages:', nPages);

  const topScrollButtonData = {
    text: "Haut de page",
    icon: TopArrowIcon,
    className: "top-scroll-button",
    onClick: () => goToTop()
  };

  let produit = 1;
  let sum = 0;
  for (let i = 1; i < 6; i++) {
    produit = produit+i;
  }

  return (
    <Container>
      <Ul>
        {
          currentRecords?.map((article, index) => (
            <Li key={index} className={article.important ? 'important-article' : 'default-article'}>
              <Link onClick={() => openInNewTab(article.link)}>
                <Article data={article}
                          key={index}/>
              </Link>
            </Li>
          ))
        }
      </Ul>
      {
        nPages > 1 && <Pagination nPages={nPages} 
                                  currentPage={currentPage} 
                                  setCurrentPage={setCurrentPage} />
      }
      {
        showTopBtn && (<IconButton data={topScrollButtonData}/>)
      }
    </Container>
  );
};

export default Home;