import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../../assets/images/logo.png';
import RussiaFlagUrl from '../../assets/images/russia.png';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  background-color: var(--dark);
`;

const HeaderTitleLink = styled(Link)`
  margin: .5rem 1.5rem;
  display: flex;
  align-items: center;
  text-decoration: none;
`;

const HeaderTitle = styled.h1`
  margin-block: 0;
  margin-inline: 0;
  color: var(--light);
  font-size: 2.75rem;
  font-weight: 300;
`;

const HeaderLogo = styled.img`
  margin-left: .75rem;
  padding: .125rem;
  display: block;
  border-radius: 50%;
  background-color: var(--light);
`;

const HeaderSupportingContainer = styled.div`
  margin: .5rem 1.5rem;
  display: flex;
  align-items: center;
  text-decoration: none;
`;

const RussiaFlag = styled.img`
  width: 1.75rem;
  display: block;
`;

const HeaderSupporting = styled.div`
  margin-left: .75rem;
  color: var(--light);
`;

const Header = props => {
  const title = 'L\'alluminati';
  const supporting = 'Soutien à la Russie et à un monde multipolaire';

  return (
    <HeaderContainer>
      <HeaderTitleLink to="">
        <HeaderTitle>
          {title}
        </HeaderTitle>
        <HeaderLogo src={Logo} alt={title}/>
      </HeaderTitleLink>
      <HeaderSupportingContainer>
        <RussiaFlag src={RussiaFlagUrl} alt={supporting}/>
        <HeaderSupporting>
          {supporting}
        </HeaderSupporting>
      </HeaderSupportingContainer>
    </HeaderContainer>
  );
};

export default Header;