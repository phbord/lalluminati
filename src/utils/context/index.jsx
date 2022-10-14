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


export const SortMediasContext = createContext();

export const SortMediasProvider = ({ children }) => {
  const [sortMedias, setSortMedias] = useState('name');

  const toggleSortMedias = (sort) => {
    setSortMedias(sort ? sort : 'name');
  };

  return (
    <SortMediasContext.Provider value={{ sortMedias, toggleSortMedias }}>
      {children}
    </SortMediasContext.Provider>
  );
};