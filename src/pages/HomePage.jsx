import { TrendingList } from 'components/TrendingList/TrendingList.jsx';
import { useTrendingList } from '../utils/hooks/useTrendingList';

const HomePage = () => {
  const { trendingMovies } = useTrendingList();
  return (
    <div>
      <TrendingList movies={trendingMovies} />
    </div>
  );
};

export default HomePage;
