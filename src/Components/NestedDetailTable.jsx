/* eslint-disable react/prop-types */
import { useRef, useCallback } from 'react';
import useEpisodes from '../Hooks/useEpisode';

const NestedDetailTable = ({ character }) => {
  const { episodes, loadMore, loading } = useEpisodes(character.episode);
  const observer = useRef();
  const lastEpisodeElementRef = useCallback(node => {
      if (loading) return; 

      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver(entries => {
          if (entries[0].isIntersecting) {
              loadMore();
              console.log({episodes})
          }
      });

      if (node) observer.current.observe(node);
  }, [loading, loadMore]);

  return (
    <tr>
        <td style={{ display: 'flex', flexDirection: 'row' }}>
            <div><img src={character.image} alt={character.name}/></div>
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
            <table style={{ border: '1px solid black' }}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Season</th>
                        <th>Episode</th>
                    </tr>
                </thead>
                <tbody>
                    {episodes.map((episode, index) => {
                        // extract season and episode numbers
                        const match = episode.episode.match(/S(\d+)E(\d+)/);
                        const isLastElement = index === episodes.length - 1;
                        if (match) {
                            return (
                                <tr key={episode.nam + episode.episode} ref={isLastElement ? lastEpisodeElementRef : null}>
                                    <td>{episode.name}</td>
                                    <td>{parseInt(match[1], 10)}</td>
                                    <td>{parseInt(match[2], 10)}</td>
                                </tr>
                            );
                        }
                        return null;
                    })}
                    {loading && <tr><td>Loading more episodes...</td></tr>}
                </tbody>
            </table>
        </td>
    </tr>
);
};

export default NestedDetailTable;
