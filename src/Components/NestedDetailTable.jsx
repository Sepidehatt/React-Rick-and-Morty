/* eslint-disable react/prop-types */

const NestedDetailTable = ({character, episodes}) => {
  const episodeRegex = /S(\d+)E(\d+)/;

  return (
    <tr>
      <td style={{display: 'flex',flexDirection:'row'}}>
        <div><img src={character.image}/></div>
        <table style={{border: '1px solid black'}}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Season</th>
              <th>Episode</th>
            </tr>
          </thead>
          <tbody>
          {episodes && 
             episodes.map(e =>{
              const match = e.episode.match(episodeRegex);
            if (match) {
              const season = parseInt(match[1], 10); 
              const episode = parseInt(match[2], 10);

              return (
                <tr key={e.id}>
                  <td>{e.name}</td>
                  <td>{season}</td>
                  <td>{episode}</td>
                </tr>
              );
            }
            return null;
          })}
          </tbody>
        </table>
      </td>
      </tr>
  )
}

export default NestedDetailTable