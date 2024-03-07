/* eslint-disable react/prop-types */
import { ExpendableButton } from './ExpandableButton';
import useOpenController from "../Hooks/UseOpenController";
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
        <td>{character.episode?.length}</td>
      {/* <div>
        <p>episode:</p>
        <ul>
          {character.episode?.map((e, index) => (
            <li key={index}>{e}</li>
          ))}
        </ul>
      </div> */}
      </tr>
      {isOpen && <NestedDetailTable character={character} />}
      </tbody>
  )
}

export default CharacterDetail