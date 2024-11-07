import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMoviesByCredits } from '../api-movies.js';

import css from './MovieCast.module.css';

const MovieCast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  console.log('movieId', movieId);
  useEffect(() => {
    async function handleMovieCastRequest() {
      try {
        const data = await fetchMoviesByCredits(movieId);
        if (data.length > 0) {
          setCast(data);
        }
      } catch (error) {
        console.log(error);
      }
    }
    handleMovieCastRequest();
  }, [movieId]);
  return (
    <div className={css.castContainer}>
      {cast.map(({ id, profile_path, name, character }) => (
        <ul key={id}>
          <li>
            <img
              src={`https://image.tmdb.org/t/p/w500${profile_path}`}
              alt=''
            />
          </li>
          <li>{name}</li>
          <li>{character}</li>
        </ul>
      ))}
    </div>
  );
};

export default MovieCast;
