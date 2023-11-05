import * as API from '../api/apiMoviedb';
import { useEffect, useState } from 'react';

export const useMovieDetails = movieId => {
  const [movieDetails, setMovieDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    API.getMovieDetails(movieId)
      .then(movieDetailsReturnedFromApi => {
        setMovieDetails(movieDetailsReturnedFromApi);
        setLoading(false);
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      });
  }, [movieId]);
  return { movieDetails, loading, error };
};
