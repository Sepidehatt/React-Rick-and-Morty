/* eslint-disable react/prop-types */

const NestedDetailTable = ({character, episodes}) => {
  return (
    <tr>
      <td style={{display: 'flex',flexDirection:'row'}}>
        <div><img src={character.image}/></div>
        <table style={{border: '1px solid black'}}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Date</th>
              <th>Episode</th>
            </tr>
          </thead>
          <tbody>
          {episodes && 
             episodes.map(e =>{
            return (
              <tr key={e.id}>
              <td>{e.name}</td>
              <td>{e.air_date}</td>
              <td>{e.episode}</td>
            </tr>
            )
          })
            }
          </tbody>
        </table>
      </td>
      </tr>
  )
}

export default NestedDetailTable