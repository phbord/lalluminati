import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { openInNewTab } from '../../utils/functions/index';

const Article = styled.article`
  margin: var(--articleMargin) 0;
  padding: var(--articlePadding);
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: stretch;
  align-items: stretch;
`;

const H1 = styled.h1`
  margin: 0 0 .25rem;
  font-size: 1.35rem;
  font-weight: bold;
`;

const Cap = styled.span`
  text-transform: uppercase;
`;

const Description = styled.div`
    font-size: 1.35rem;
`;

const CelebrityLink = styled.button`
  padding: 0;
  border: 0;
  background-color: transparent;
  color: var(--dark);
  font-size: 1.35rem;
  text-decoration: none;
  text-align: left;
  cursor: pointer;
  -webkit-transition: all 300ms ease;
  -moz-transition: all 300ms ease;
  -ms-transition: all 300ms ease;
  -o-transition: all 300ms ease;
  transition: all 300ms ease;

  &:hover {
    color: var(--articleColor);
  }
`;

const Celebrity = (data) => {
  const celebrityData = data.data;

  return (
    <Article>
      <H1>{celebrityData.firstname} <Cap>{celebrityData.lastname}</Cap></H1>
      <Description>{celebrityData.desc}</Description>
      {
        celebrityData?.url
        && (<CelebrityLink onClick={() => openInNewTab(celebrityData.url)}>{celebrityData.url}</CelebrityLink>)
      }
    </Article>
  );
};

export default Celebrity;