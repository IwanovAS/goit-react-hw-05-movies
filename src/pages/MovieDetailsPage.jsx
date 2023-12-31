import {
  Outlet,
  Link,
  useParams,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import { useMovieDetails } from 'utils/hooks/useMovieDetails';
import { Loader } from 'components/Loader/Loader';

const defaultImg =
  'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const { movieDetails, loading, error } = useMovieDetails(movieId);

  const location = useLocation();
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(location.state.from);
  };

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <p>Something went wrong</p>;
  }

  return (
    <div>
      <button type="button" onClick={handleGoBack}>
        Go back
      </button>
      <h2>
        {movieDetails.title} (
        {movieDetails.release_date
          ? movieDetails.release_date.substring(0, 4)
          : ''}
        )
      </h2>

      <img
        src={
          movieDetails.poster_path
            ? `https://image.tmdb.org/t/p/w300_and_h450_bestv2${movieDetails.poster_path}`
            : defaultImg
        }
        onError={e => {
          e.target.src = defaultImg;
        }}
        alt="{movieDetails.original_title}"
      />

      <p>
        User Score:{' '}
        {movieDetails.vote_average
          ? Math.fround(movieDetails.vote_average * 10).toFixed(0)
          : ''}
        %
      </p>
      <h3>Overview</h3>
      <p>{movieDetails.overview}</p>

      <h4>Genres</h4>
      <p>
        {movieDetails.genres
          ? movieDetails.genres.map(genre => genre.name).join(' ')
          : ''}
      </p>

      <p>Additional information</p>

      <ul>
        <li>
          <Link to="cast" state={{ from: location.state.from }}>
            Cast
          </Link>
        </li>
        <li>
          <Link to="reviews" state={{ from: location.state.from }}>
            Reviews
          </Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;
