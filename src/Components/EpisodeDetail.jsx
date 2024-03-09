/* eslint-disable react/prop-types */
const EpisodeDetail = ({ episode, index, episodes, lastEpisodeElementRef }) => {

  const match = episode.episode.match(/S(\d+)E(\d+)/);
  const isLastElement = index === episodes.length - 1;

  if (!match) return null;
  
    return (
      <tr ref={isLastElement ? lastEpisodeElementRef : null}>
        <td>{episode.name}</td>
        <td>{parseInt(match[1], 10)}</td>
        <td>{parseInt(match[2], 10)}</td>
      </tr>
    );


}

export default EpisodeDetail;