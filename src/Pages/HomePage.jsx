import { useState } from 'react'
import SearchBar from '../Components/SearchBar/SearchBAr';
import CharactersFetcher from '../Components/CharactersFetcher';
import Characters from '../Components/Characters';
import { CharactersProvider, useCharacters } from '../Context/CharactersContext';

const HomePage = () => {

  const HomeContent = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const { totalPages } = useCharacters();
  
    return (
      <>
        <SearchBar setSearchTerm={setSearchTerm} />
        <CharactersFetcher searchTerm={searchTerm} currentPage={currentPage} />
        <Characters currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages} />
      </>
    );
  };
  return (
    <CharactersProvider>
      <HomeContent />
    </CharactersProvider>
  )
}

export default HomePage