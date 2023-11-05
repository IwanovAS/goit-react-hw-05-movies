import { SearchForm } from 'components/SearchForm/SearchForm';
import { TrendingList } from 'components/TrendingList/TrendingList';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import * as API from '../utils/api/apiMoviedb';
import { Loader } from 'components/Loader/Loader';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const movieTitle = searchParams.get('query');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (movieTitle) {
      setLoading(true);
      API.searchMovies(movieTitle)
        .then(ret => {
          setMovies(ret);
          setLoading(false);
        })

        .catch(error => {
          console.error(error);
          setLoading(false);
        });
    }
  }, [movieTitle]);

  return (
    <div>
      <SearchForm setSearchParams={setSearchParams} />
      {loading ? ( <Loader /> ) : ( <TrendingList movies={movies} /> )}
    </div>
  );
};

export default Movies;
