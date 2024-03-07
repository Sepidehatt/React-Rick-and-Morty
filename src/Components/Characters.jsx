import { useState, useEffect } from "react"
import { ApiServices } from "../Services/ApiServices"
import { FetchClient } from "../ServiceClients/FetchClients"
import CharacterDetail from './CharacterDetail'
import GenericButton from "./GenericButton"
import { useDebounce } from "../Hooks/useDebounce"
const Characters = () => {
  const [characters, setCharacters] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(false);


  //to prevent unnecessary api calls
  const debouncedSearchTerm = useDebounce(searchTerm, 500);


  useEffect(() => {
    const apiServices = new ApiServices(FetchClient)
    const fetchCharacters = async () => {
      setIsLoading(true);
      try {
        const query = {
          page: currentPage,
          name: encodeURIComponent(debouncedSearchTerm),
        }
        const characters = await apiServices.getCharacters(query);
        setCharacters(characters);
        setTotalPages(characters.info.pages)
      } catch (error) {
        console.log(error)
        setCharacters([]);
      } finally {
        setIsLoading(false);
      }
    }
    fetchCharacters()
  }, [currentPage, debouncedSearchTerm])
  return (
    <>
      <div>Characters</div>
      <div>
      <input
        type="text"
        placeholder="Search for a character"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      </div>
      {isLoading && <div>Loading...</div>}
      
    <table>
      <thead>
        <td></td>
        <th>Name</th>
        <th>Status</th>
        <th>Species</th>
        <th>Gender</th>
        <th>Location</th>
        <th>Episodes</th>
      </thead>
      {
      characters && characters?.results?.map((character)=><CharacterDetail key={character.id} character={character}/>
      )
    }
      </table>
      <div>
        <GenericButton
          label="Previous"
          onClick={() => setCurrentPage(Math.max(currentPage - 1, 1))}
          disabled={currentPage === 1}
        />
        <span> Page {currentPage} of {totalPages} </span>
        <GenericButton
          label="Next"
          onClick={() => setCurrentPage(Math.min(currentPage + 1, totalPages))}
          disabled={currentPage === totalPages}
        />
      </div>
    </>
  )
}

export default Characters