import CharacterDetail from './CharacterDetail'
import { useCharacters } from '../Context/CharactersContext'

const Characters = () => {
  const { characters, loading, error } = useCharacters();

  return (
    <>
    {loading && <p>Loading...</p>}
      {error && <p>Error fetching characters: {error.message}</p>}
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
          characters?.map((character) => <CharacterDetail key={character.id + character.name} character={character} />
          )
        }
      </table>
    </>
  )
}

export default Characters