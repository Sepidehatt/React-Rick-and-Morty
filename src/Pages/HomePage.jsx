import SearchBar from '../Components/SearchBar/SearchBAr';
import Characters from '../Components/Characters';
import { CharactersProvider } from '../Context/CharactersContext';
import CharactersPagination from '../Components/CharactersPagination';

const HomePage = () => {
  return (
    <CharactersProvider>
      <>
        <SearchBar />
        <Characters />
        <CharactersPagination />
      </>
    </CharactersProvider>
  );
};

export default HomePage;