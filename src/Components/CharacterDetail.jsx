/* eslint-disable react/prop-types */
import { ExpendableButton } from './ExpandableButton';
import useOpenController from "../Hooks/useOpenController";
import NestedDetailTable from "./NestedDetailTable";

const CharacterDetail = ({character}) => {
  const { isOpen, toggle } = useOpenController (false);

  return (
    <tbody>
      <tr>
      <td className="button-td">
          <ExpendableButton isOpen={isOpen} toggle={toggle} />
        </td>
        <td>{character.name}</td>
        <td>{character.status}</td>
        <td>{character.species}</td>
        <td>{character.gender}</td>
        <td>{character.location.name}</td>
        <td>
        {character.episode?.length == 51 ? `${character.episode?.length} (All Episodes)` : character.episode?.length }
        </td>
      </tr>
      {isOpen && <NestedDetailTable character={character}  />}
      </tbody>
  )
}

export default CharacterDetail