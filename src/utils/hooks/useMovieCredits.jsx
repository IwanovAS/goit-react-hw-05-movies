import * as API from '../api/apiMoviedb';
import { useEffect, useState } from 'react';

export const useMovieCredits = movieId => {
  const [movieCredits, setMovieCredits] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    API.getMovieCredits(movieId)
      .then(ret => {
        setMovieCredits(ret);
        setLoading(false);
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      });
  }, [movieId]);
  return { movieCredits, loading, error };
};
