import { useState, useEffect } from "react"
import { ApiServices } from "../Services/ApiServices"
import { FetchClient } from "../ServiceClients/FetchClients"
import CharacterDetail from './CharacterDetail'
const Characters = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const apiServices = new ApiServices(FetchClient)
    const fetchCharacters = async () => {
      try {
        const characters = await apiServices.getCharacters();
        setCharacters(characters);
      } catch (error) {
        console.log(error)
      }
    }
    fetchCharacters()
  }, [])
  return (
    <>
      <div>Characters</div>
      
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
    </>
  )
}

export default Characters