import { useState, useEffect, useCallback } from 'react';
import { apiServices } from '../Services/ApiServices';

const useEpisodes = (episodeUrls) => {
    const [episodes, setEpisodes] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const initialLoadAmount = Math.min(10, episodeUrls.length);
    const [loadAmount, setLoadAmount] = useState(initialLoadAmount);

    useEffect(() => {
        // Immediate IIFE to load initial or additional episodes
        (async () => {
            if (!episodeUrls.length || loadAmount === 0) return;

            setLoading(true);
            setError(null);

            try {
                const urlsToLoad = episodeUrls.slice(0, loadAmount);
                const result = await Promise.all(urlsToLoad.map(url => apiServices.getEpisode(url)));
                setEpisodes(result);
            } catch (error) {
                setError(error);
                console.error("Error fetching episodes:", error);
            } finally {
                setLoading(false);
            }
        })();
    }, [episodeUrls, loadAmount]);

    const loadMore = useCallback(() => {
        // Only increase loadAmount if there are more episodes to load
        if (loadAmount < episodeUrls.length) {
            const nextLoadAmount = Math.min(loadAmount + 10, episodeUrls.length);
            setLoadAmount(nextLoadAmount);
        }
    }, [loadAmount, episodeUrls.length]);

    return { episodes, loading, error, loadMore };
};
export default useEpisodes