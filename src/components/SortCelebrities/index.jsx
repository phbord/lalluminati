import React, { useContext } from 'react';
import styled from 'styled-components';
import { SortCelebritiesContext } from '../../utils/context';

const Ul = styled.ul`
  padding: 0;
  display: flex;
  align-items: center;
`;

const Li = styled.li`
  list-style: none;
  margin: 0 .5rem .5rem 0;
  font-size: 1.25rem;
`;

const Button = styled.button`
  padding: .25rem .5rem;
  border: 0;
  background-color: var(--yellowStronger);
  font-weight: 700;
  -webkit-letter-spacing: .125rem;
  -moz-letter-spacing: .125rem;
  -ms-letter-spacing: .125rem;
  letter-spacing: .125rem;
  cursor: pointer;
  -webkit-transition: all 300ms ease;
  -moz-transition: all 300ms ease;
  -ms-transition: all 300ms ease;
  -o-transition: all 300ms ease;
  transition: all 300ms ease;

  &:hover {
    background-color: var(--orangeStronger);
  }
`;

const SortCelebrities = () => {
  const { toggleSortCelebrities } = useContext(SortCelebritiesContext);

  return (
    <nav>
      <Ul>
        <Li>Tri par</Li>
        <Li>
          <Button onClick={() => toggleSortCelebrities('firstname')}>prénom</Button>
        </Li>
        <Li>
          <Button onClick={() => toggleSortCelebrities('lastname')}>nom</Button>
        </Li>
      </Ul>
    </nav>
  );
};

export default SortCelebrities;