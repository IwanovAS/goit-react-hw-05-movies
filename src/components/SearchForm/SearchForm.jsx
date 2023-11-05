import css from './SearchForm.module.css';
import { useState } from 'react';

export const SearchForm = ({ setSearchParams }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    setSearchParams({ query });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className={css.input}
          type="text"
          placeholder="Movie name ..."
          value={query}
          onChange={e => setQuery(e.target.value)}
        ></input>
        <button className={css.searchBtn} type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchForm;
