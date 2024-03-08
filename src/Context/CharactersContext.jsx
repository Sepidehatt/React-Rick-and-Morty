import { createContext, useState, useContext } from 'react';

const CharactersContext = createContext();

export const CharactersProvider = ({ children }) => {
    const [characters, setCharacters] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);

    const value = {
        characters,
        setCharacters,
        totalPages,
        setTotalPages,
        currentPage,
        setCurrentPage,
    };

    return (
        <CharactersContext.Provider value={value}>
            {children}
        </CharactersContext.Provider>
    );
};

export const useCharacters = () => useContext(CharactersContext);
