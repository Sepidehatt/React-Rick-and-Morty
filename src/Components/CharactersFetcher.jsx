import { useEffect } from 'react';
import { useCharacters } from '../Context/CharactersContext';
import { debounce } from 'lodash';
import { ApiServices } from "../Services/ApiServices";
import { FetchClient } from "../ServiceClients/FetchClients";

const CharactersFetcher = ({ searchTerm, currentPage }) => {
  const { setCharacters, setTotalPages } = useCharacters();
  const apiServices = new ApiServices(FetchClient);

  const fetchCharacters = async () => {
    try {
      const query = {
        page: searchTerm ? 1 : currentPage,
        name: searchTerm,
      }

      const response = await apiServices.getCharacters(query);
      setCharacters(response.results || []);
      setTotalPages(response.info.pages || 0);
    } catch (error) {
      console.error("Failed to fetch characters:", error);
      setCharacters([]);
      setTotalPages(0);
    }
  };

  useEffect(() => {
    const debouncedFetch = debounce(fetchCharacters, 500);
    debouncedFetch();

    return () => debouncedFetch.cancel();
  }, [searchTerm, currentPage]);

  return null; 
};

export default CharactersFetcher
