import CharacterDetail from './CharacterDetail'
import GenericButton from "./GenericButton"
import {useCharacters} from '../Context/CharactersContext'

const Characters = ({ currentPage, setCurrentPage, totalPages }) => {
  const { characters } = useCharacters();

  const handlePreviousPage = () => {
    setCurrentPage(Math.max(1, currentPage - 1));
  };

  const handleNextPage = () => {
    setCurrentPage(Math.min(totalPages, currentPage + 1));
  }

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
      characters?.map((character)=><CharacterDetail key={character.id+character.name} character={character}/>
      )
    }
      </table>
      <div>
        <GenericButton label="Previous" onClick={handlePreviousPage} disabled={currentPage <= 1} />
        <span> Page {currentPage} of {totalPages} </span>
        <GenericButton label="Next" onClick={handleNextPage} disabled={currentPage >= totalPages} />
      </div>
    </>
  )
}

export default Characters