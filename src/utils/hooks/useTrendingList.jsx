import * as API from '../api/apiMoviedb';
import { useEffect, useState } from 'react';

export const useTrendingList = () => {
  const [trendingMovies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    API.getTrending()
      .then(ret => {
        setMovies(ret);
        setLoading(false);
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      });
  }, []);
  return { trendingMovies, loading, error };
};
