import React from 'react';
import styled from 'styled-components';
import { useMediaTypes } from '../../utils/hooks';

const Type = styled.div`
  margin: 0 0 var(--defaultGutterSizeY);
  padding: .25rem .5rem;
  display: flex;
  flex-wrap: wrap;
  background-color: var(--yellowStronger);
  font-size: 1.25rem;
  font-weight: 700;
  letter-spacing: .125rem;
`;

const TypeInLogo = styled.div`
  position: absolute;
  top: .5rem;
  left: .5rem;
  margin: 0 .5rem .5rem 0;
  padding: .25rem .5rem;
  display: flex;
  flex-wrap: wrap;
  background-color: var(--orangeStronger);
  font-size: 1.25rem;
  font-weight: 700;
  letter-spacing: .125rem;
`;

const Logo = (data) => {
  const MediaData = data.data;
  const { mediaType } = useMediaTypes(MediaData.type);

  const Container = styled.div`
    position: relative;
    width: 100%;
    max-width: 17.5rem;
    height: 9rem;
    margin-bottom: var(--defaultGutterSizeY);
    border: 1px solid var(--articleColor);
    border-radius: .25rem;
    background: transparent url(${MediaData.photo}) center no-repeat;
    background-size: cover;
  `;

  return (
    <>
      {
        MediaData.photo
        ? (<Container>
          <TypeInLogo>{mediaType}</TypeInLogo>
        </Container>)
        : (<Type>{mediaType}</Type>)
      }
    </>
  );
};

export default Logo;