/* eslint-disable react/prop-types */
import { ExpendableButton } from './ExpandableButton';
import useOpenController from "../Hooks/UseOpenController";
import NestedDetailTable from "./NestedDetailTable";
import { useEffect, useState } from 'react';
import { ApiServices } from '../Services/ApiServices';
import { FetchClient } from '../ServiceClients/FetchClients';

const CharacterDetail = ({character}) => {
  const { isOpen, toggle } = useOpenController (false);

  const [episodes, setEpisodes] = useState([])

  useEffect(() => {
    const apiServices = new ApiServices(FetchClient)
    const fetchData =async() =>{
      try {
        const result = await Promise.all(
          character.episode.map(async(url) => {
             return await apiServices.getEpisode(url);
          })
        )
         setEpisodes(result)
      } catch (error) {
        console.error("Error fetching episodes:", error);
      }
    } 
    fetchData()

  }, [character, character.episode])

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
      {isOpen && episodes && <NestedDetailTable character={character} episodes={episodes} />}
      </tbody>
  )
}

export default CharacterDetail