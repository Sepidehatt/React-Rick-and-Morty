const SearchBar = ({ setSearchTerm }) => {
  return (
    <input
      type="text"
      placeholder="Search for a character"
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  );
};

export default SearchBar;
