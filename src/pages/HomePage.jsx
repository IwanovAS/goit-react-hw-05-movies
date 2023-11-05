import { TrendingList } from 'components/TrendingList/TrendingList.jsx';
import { useTrendingList } from '../utils/hooks/useTrendingList';
import { Loader } from '../components/Loader/Loader';

const HomePage = () => {
  const { trendingMovies, loading, error } = useTrendingList();
  return (
    <div>
      {loading && <Loader />}
      {error && <p>Something went wrong</p>}
      {!loading && !error && <TrendingList movies={trendingMovies} />}
    </div>
  );
};

export default HomePage;
