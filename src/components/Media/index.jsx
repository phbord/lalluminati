import React from 'react';
import styled from 'styled-components';
import { openInNewTab } from '../../utils/functions/index';
import Logo from '../logo';

const Article = styled.article`
  width: calc(100% - 2*var(--defaultGutterSizeX));
  max-width: var(--containerColumnWidth);
  margin: 0 0 2rem;
  padding: var(--articlePadding) var(--defaultGutterSizeX);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  overflow: hidden;

  @media screen and (max-width: 550px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Content = styled.div`
  margin-left: var(--defaultGutterSizeX);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  overflow: hidden;

  @media screen and (max-width: 550px) {
    margin-left: 0;
  }
`;

const H1 = styled.h1`
  margin: 0 0 .25rem;
  font-size: 1.35rem;
  font-weight: bold;
`;

const Description = styled.div`
  font-size: 1.35rem;
  overflow: hidden;
  word-wrap: break-word;
`;

const Link = styled.button`
  padding: 0;
  border: 0;
  background-color: transparent;
  color: var(--dark);
  font-size: 1.35rem;
  text-decoration: none;
  text-align: left;
  overflow: hidden;
  overflow-wrap: break-word;
  word-wrap: break-word;
  word-break: break-all;
  hyphens: auto;
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

const Media = (data) => {
  const MediaData = data.data;

  return (
    <Article>
      <Logo data={MediaData}/>
      <Content>
        <H1>{MediaData.name}</H1>
        {
          MediaData?.desc
          && <Description>{MediaData.desc}</Description>
        }
        {
          MediaData?.url
          && (<Link onClick={() => openInNewTab(MediaData.url)}>{MediaData.url}</Link>)
        }
      </Content>
    </Article>
  );
};

export default Media;