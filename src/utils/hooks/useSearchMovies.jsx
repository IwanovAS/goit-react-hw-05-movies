import * as API from '../api/apiMoviedb';
import { useEffect, useState } from 'react';

export const useSearchMovies = input => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    API.searchMovies(input)
      .then(ret => {
        setMovies(ret);
        setLoading(false);
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      });
  }, [input]);
  return { movies, loading, error };
};
