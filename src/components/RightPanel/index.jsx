import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { isSlide } from '../../utils/functions/index';

const Panel = styled.nav`
  position: fixed;
  top: 0;
  bottom: 0;
  right: -100%;
  z-index: 500;
  width: 100%;
  max-width: 33rem;
  padding-top: 7.25rem;
  background-color: var(--articleColor);
  -webkit-box-shadow: -5px 0 5px 0 rgba(0,0,0,.125);
  box-shadow: -5px 0 5px 0 rgba(0,0,0,.125);
  -webkit-transition: all 300ms ease;
  -moz-transition: all 300ms ease;
  -ms-transition: all 300ms ease;
  -o-transition: all 300ms ease;
  transition: all 300ms ease;
`;

const UlPanel = styled.ul`
  padding-left: 0;
`;

const LiPanel = styled.li`
  list-style: none;
  margin: .5rem 0;
`;

const LinkPanel = styled(Link)`
  padding: var(--articlePadding);
  display: block;
  color: var(--dark);
  font-size: 1.25rem;
  font-weight: 700;
  letter-spacing: .125rem;
  text-decoration: none;
  -webkit-transition: all 300ms ease;
  -moz-transition: all 300ms ease;
  -ms-transition: all 300ms ease;
  -o-transition: all 300ms ease;
  transition: all 300ms ease;

  &:hover {
    background-color: var(--yellow);
  }
`;

const RightPanel = (data) => {
  return (
    <Panel className={data.isSlideClass ? 'right-panel' : ''}>
      <UlPanel>
        <LiPanel>
          <LinkPanel to="/" onClick={() => _isSlide(data)}>
            Accueil
          </LinkPanel>
        </LiPanel>
        <LiPanel>
          <LinkPanel to="/celebrities" onClick={() => _isSlide(data)}>
            Personnalités
          </LinkPanel>
        </LiPanel>
        <LiPanel>
          <LinkPanel to="/medias" onClick={() => _isSlide(data)}>
            Médias
          </LinkPanel>
        </LiPanel>
      </UlPanel>
    </Panel>
  );
};

export default RightPanel;

function _isSlide(data) {
  isSlide(data.isSlideClass, data.setIsSlideClass);
}