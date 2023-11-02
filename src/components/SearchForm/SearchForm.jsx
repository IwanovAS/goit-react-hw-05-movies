import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { TrendingList } from 'components/TrendingList/TrendingList';
import * as API from '../../utils/api/apiMoviedb';
import css from './SearchForm.module.css';

export const SearchForm = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSubmit = e => {
    setSearchParams({ query: e.target[0].value });
    e.preventDefault();
    return;
  };

  useEffect(() => {
    const movieTitle = searchParams.get('query');
    if (movieTitle) {
      API.searchMovies(movieTitle).then(ret => setMovies(ret));
    }
  }, [searchParams]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input className={css.input} type="text" placeholder="Movie name ..."></input>
        <button className={css.searchBtn} type="submit">Search</button>
      </form>
      <TrendingList movies={movies} />
    </div>
  );
};

export default SearchForm;
