import { useParams } from 'react-router-dom';
import { useMovieCredits } from 'utils/hooks/useMovieCredits';

const defaultImg =
  'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

const Cast = () => {
  const { movieId } = useParams();
  const { movieCredits } = useMovieCredits(movieId);

  return (
    <div>
      <ul>
        {movieCredits.map(cast => {
          return (
            <li key={cast.id}>
              <img
                src={
                  cast.profile_path
                    ? `https://image.tmdb.org/t/p/w300_and_h450_bestv2/${cast.profile_path}`
                    : defaultImg
                }
                onError={e => {
                  e.target.src = defaultImg;
                }}
                width={250}
                alt={cast.name}
              />
              <p>{cast.name}</p>
              <p>Character: {cast.character}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Cast;
