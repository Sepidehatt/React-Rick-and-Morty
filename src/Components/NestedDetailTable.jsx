/* eslint-disable react/prop-types */
import { useRef, useCallback } from 'react';
import useEpisodes from '../Hooks/useEpisode';
import EpisodeDetail from './EpisodeDetail';

const NestedDetailTable = ({ character }) => {
  const { episodes, loadMore, loading } = useEpisodes(character.episode);
  const observer = useRef();

  const lastEpisodeElementRef = useCallback(node => {
    if (loading) return;

    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        loadMore();
        console.log({ episodes })
      }
    });

    if (node) observer.current.observe(node);
  }, [loading, loadMore]);

  if (!character) return null;
  return (
    <tr>
      <td style={{ display: 'flex', flexDirection: 'row' }}>
        <div>
          <img src={character.image} alt={character.name} />
        </div>
        <div>
          <span>{character.name}</span>
          <ul>
            <li>{character.gender}</li>
            <li>{character.status}</li>
            <li>{character.species}</li>
            <li>{character.origin.name}</li>
            <li>{character.location.name}</li>
          </ul>
        </div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Season</th>
              <th>Episode</th>
            </tr>
          </thead>
          <tbody>
            {episodes.map((episode, index) => <EpisodeDetail
              key={episode.name + episode.episode}
              episode={episode}
              index={index}
              episodes={episodes}
              lastEpisodeElementRef={lastEpisodeElementRef} />)}
            {loading && <tr><td>Loading more episodes...</td></tr>}
          </tbody>
        </table>
      </td>
    </tr>
  );
};

export default NestedDetailTable;
