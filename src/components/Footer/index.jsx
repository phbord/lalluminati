import React from 'react';
import styled from 'styled-components';
import RussiaFlagUrl from '../../assets/images/russia.png';

const FooterContainer = styled.footer`
    margin-top: auto;
    padding: 2rem .75rem 2rem calc(var(--itemPaddingLeft) + var(--defaultGutterSizeX));
    display: flex;
    align-items: center;
`;

const FooterSubContainer = styled.div`
    display: inline-flex;
    justify-content: center;
    align-items: center;
`;

const RussiaFlag = styled.img`
  width: 3.25rem;
  display: block;
  border: var(--dark) solid 1px;
  border-radius: 50%;
`;

const FooterSupporting = styled.div`
  margin-left: .75rem;
  font-size: 1.5rem;
`;

const Footer = props => {
  const supporting = 'Soutien à la Russie et à un monde multipolaire';

  return (
      <FooterContainer>
        <FooterSubContainer>
            <RussiaFlag src={RussiaFlagUrl} alt={supporting}/>
            <FooterSupporting>
                {supporting}
            </FooterSupporting>
        </FooterSubContainer>
    </FooterContainer>
  );
};

export default Footer;