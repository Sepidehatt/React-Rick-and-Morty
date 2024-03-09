import { useEffect, useState } from 'react';
import { ApiServices } from '../Services/ApiServices';
import { FetchClient } from '../ServiceClients/FetchClients';
import { debounce } from 'lodash';

const useFetchCharacters= ({ searchTerm, currentPage }) => {
  const [characters, setCharacters] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const apiServices = new ApiServices(FetchClient);

  const fetchCharacters = async () => {
    setLoading(true);
    setError(null);
    try {
      const query = {
        page: searchTerm ? 1 : currentPage,
        name: searchTerm,
      }

      const response = await apiServices.getCharacters(query);
      setCharacters(response.results || []);
      setTotalPages(response.info?.pages || 0);
    } catch (error) {
      console.error("Failed to fetch characters:", error);
      setCharacters([]);
      setTotalPages(0);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const debouncedFetch = debounce(fetchCharacters, 500);
    debouncedFetch();

    return () => debouncedFetch.cancel();
  }, [searchTerm, currentPage]);

  return { characters, totalPages, loading, error };
};

export default useFetchCharacters;
