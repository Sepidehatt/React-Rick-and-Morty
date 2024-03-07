/* eslint-disable react/prop-types */

const NestedDetailTable = ({character}) => {
  return (
    <tr>
      <td></td>
      <td><img src={character.image}/></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      { 
        <ul>
          {character.episode?.map((e, index) => (
            <li key={index}>{e}</li>
          ))}
        </ul>
       }
      </tr>
  )
}

export default NestedDetailTable