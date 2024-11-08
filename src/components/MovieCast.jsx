import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMoviesByCredits } from '../api-movies.js';

import css from './MovieCast.module.css';

const MovieCast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  const filteredData = cast.filter(
    (value, index, self) => self.findIndex((v) => v.id === value.id) === index
  );

  useEffect(() => {
    if (!movieId || cast.length > 0) return;
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
  }, [movieId, cast]);
  console.log(
    cast.map((el) => {
      console.log(el.id);
    })
  );
  return (
    <div className={css.castContainer}>
      {filteredData.map(({ id, profile_path, name, character }) => (
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
