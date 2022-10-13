import React, { useState, createContext } from 'react';

export const SortCelebritiesContext = createContext();

export const SortCelebritiesProvider = ({ children }) => {
  const [sortCelebrities, setSortCelebrities] = useState('lastname');

  const toggleSortCelebrities = (sort) => {
    setSortCelebrities(sort ? sort : 'lastname');
  };

  return (
    <SortCelebritiesContext.Provider value={{ sortCelebrities, toggleSortCelebrities }}>
      {children}
    </SortCelebritiesContext.Provider>
  );
};