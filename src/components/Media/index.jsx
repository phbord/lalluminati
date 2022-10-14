import React from 'react';
import styled from 'styled-components';
import { openInNewTab } from '../../utils/functions/index';
import { useMediaTypes } from '../../utils/hooks';

const Article = styled.article`
  height: calc(100% - var(--articleMargin)*2 - var(--articlePadding)*2);
  margin: var(--articleMargin);
  padding: var(--articlePadding);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border: var(--articleColor) solid 1px;
  border-radius: .5rem;
`;

const Type = styled.div`
  margin: 0 .5rem .5rem 0;
  padding: .25rem .5rem;
  display: flex;
  flex-wrap: wrap;
  background-color: var(--yellowStronger);
  font-size: 1.25rem;
  font-weight: 700;
  letter-spacing: .125rem;
`;

const H1 = styled.h1`
  text-align: left;
`;

const Description = styled.div`
  font-size: 1.35rem;
  text-align: left;
`;

const OtherInfos = styled.div`
  margin-top: .75rem;
  text-align: left;
`;

const OtherSubInfos = styled.span`
  font-size: 1.5rem;
`;

const MediaLink = styled.button`
  padding: .25rem 0 0;
  border: 0;
  background-color: transparent;
  color: var(--dark);
  font-size: 1.35rem;
  text-decoration: none;
  text-align: left;
  overflow: hidden;
  word-wrap: break-word;
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
  const { mediaType } = useMediaTypes(MediaData.type);

  return (
    <Article>
      <Type>{mediaType}</Type>
      <H1>{MediaData.name}</H1>
      {
        MediaData.desc && <Description>{MediaData.desc}</Description>
      }
      {
        MediaData?.url
        && (<MediaLink onClick={() => openInNewTab(MediaData.url)}>{MediaData.url}</MediaLink>)
      }
    </Article>
  );
};

export default Media;