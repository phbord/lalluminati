import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../../assets/images/logo.png';

const HeaderContainer = styled.header`
  position: fixed;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: var(--defaultGutterSizeY) var(--defaultGutterSizeX);
  display: flex;
  justify-content: center;
  border-bottom: var(--yellowStronger) solid 1px;
  background-color: var(--dark);
`;

const HeaderTitleLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
`;

const HeaderTitles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const HeaderTitle = styled.h1`
  margin-block: 0;
  margin-inline: 0;
  color: var(--yellowStronger);
  font-size: 3.5rem;
  font-weight: 300;
  line-height: .9;
  letter-spacing: .175rem;
`;

const HeaderSubTitle = styled.h2`
  margin-block: 0;
  margin-inline: 0;
  color: var(--light);
  font-size: 2.175rem;
  font-weight: 300;
  line-height: .9;
`;

const HeaderLogo = styled.img`
  height: 4.5rem;
  margin-left: .75rem;
  padding: .125rem;
  display: block;
  border-radius: 50%;
  background-color: var(--light);
`;

const Header = props => {
  const title = 'L\'alluminati';
  const subTitle = 'Revue de presse libre';

  return (
    <HeaderContainer>
      <HeaderTitleLink to="/">
        <HeaderTitles>
          <HeaderTitle>
            {title}
          </HeaderTitle>
          <HeaderSubTitle>
            {subTitle}
            </HeaderSubTitle>
          </HeaderTitles>
        <HeaderLogo src={Logo} alt={title}/>
      </HeaderTitleLink>
    </HeaderContainer>
  );
};

export default Header;