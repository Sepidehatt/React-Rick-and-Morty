import { createContext, useState, useContext } from 'react';
import useFetchCharacters from '../Hooks/useFetchCharacters';

const CharactersContext = createContext();

export const CharactersProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  
  const { characters, totalPages, loading, error } = useFetchCharacters({ searchTerm, currentPage });

  const value = {
      characters,
      totalPages,
      currentPage,
      setCurrentPage,
      setSearchTerm,
      loading,
      error,
  };

  return (
      <CharactersContext.Provider value={value}>
          {children}
      </CharactersContext.Provider>
  );
};

export const useCharacters = () => useContext(CharactersContext);