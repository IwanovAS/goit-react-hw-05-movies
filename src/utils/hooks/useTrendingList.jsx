import * as API from '../api/apiMoviedb';
import { useEffect, useState } from 'react';

export const useTrendingList = () => {
  const [trendingMovies, setMovies] = useState([]);

  useEffect(() => {
    API.getTrending().then(ret => setMovies(ret));
  }, []);
  return { trendingMovies };
};
