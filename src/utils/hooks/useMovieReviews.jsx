import * as API from '../api/apiMoviedb';
import { useEffect, useState } from 'react';

export const useMovieReviews = movieId => {
  const [movieReviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    API.getMoviesReviews(movieId)
      .then(ret => {
        setReviews(ret);
        setLoading(false);
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      });
  }, [movieId]);
  return { movieReviews, loading, error };
};
