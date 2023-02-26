import React from 'react';
import styled from 'styled-components';

const List = styled.ul`
  margin: 2rem 0;
  padding: 0;
  display: flex;
  justify-content: center;
`;

const Item = styled.li`
  list-style: none;
`;

const Button = styled.button`
  margin: 0 .25rem .5rem;
  padding: .25rem .75rem;
  border: 1px solid var(--dark);
  background-color: var(--yellowStronger);
  color: var(--dark);
  font-size: 1.85rem;
  font-weight: 700;
  letter-spacing: .125rem;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    opacity: .5;
  }
  &.active {
  border: 1px solid var(--yellowStronger);
  background-color: var(--dark);
  color: var(--yellowStronger);
  }
`;

const Pagination = ({nPages, currentPage, setCurrentPage}) => {
  const pageNumbers = [...Array(nPages + 1).keys()].slice(1);

  const prevPage = () => {
    (currentPage !== 1) && setCurrentPage(currentPage - 1);
  }

  const nextPage = () => {
    (currentPage !== nPages) && setCurrentPage(currentPage + 1);
  }

  return (
    <nav>
      <List className='pagination'>
        {
          currentPage > 1
          && (
            <Item>
              <Button onClick={() => prevPage()}>
                {'<'}
              </Button>
            </Item>
          )
        }
        {
          pageNumbers.map((pageNumber, i) => (
            <Item key={i}>
              <Button className={currentPage === pageNumber && 'active'} 
                      onClick={() => setCurrentPage(pageNumber)}>
                {pageNumber}
              </Button>
            </Item>
          ))
        }
        {
          currentPage < nPages
          && (
            <Item>
              <Button onClick={() => nextPage()}>
                {'>'}
              </Button>
            </Item>
          )
        }
      </List>
    </nav>
  )
}

export default Pagination