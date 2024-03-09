import { useCharacters } from "../../Context/CharactersContext";

const SearchBar = () => {
  const { setSearchTerm, setCurrentPage } = useCharacters();

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1);
  };

  return (
    <input
      type="text"
      placeholder="Search for a character"
      onChange={handleInputChange}
    />
  );
};

export default SearchBar;
