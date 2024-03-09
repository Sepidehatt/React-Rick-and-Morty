import { useCharacters } from "../Context/CharactersContext";
import GenericButton from "./GenericButton/GenericButton"

const CharactersPagination = () => {
  const { totalPages, setCurrentPage, currentPage } = useCharacters();

  const handlePreviousPage = () => {
    setCurrentPage(Math.max(1, currentPage - 1));
  };

  const handleNextPage = () => {
    setCurrentPage(Math.min(totalPages, currentPage + 1));
  }
  return (
    <div>
      <GenericButton label="Previous" onClick={handlePreviousPage} disabled={currentPage <= 1} />
      <span>{" "}Page {currentPage} of {totalPages}{" "}</span>
      <GenericButton label="Next" onClick={handleNextPage} disabled={currentPage >= totalPages} />
    </div>
  )
}

export default CharactersPagination