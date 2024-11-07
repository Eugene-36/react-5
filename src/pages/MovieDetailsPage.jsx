import { useEffect, useState } from 'react';
import { useParams, useLocation, Link, Outlet } from 'react-router-dom';

import { fetchMoviesByID } from '../api-movies.js';

import css from './MovieDetailsPage.module.css';

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState([]);
  const { original_title, vote_average, overview } = movie;
  const { movieId } = useParams();
  const baseURLimg = import.meta.env.VITE_IMG_URL;
  const location = useLocation();
  const backLinkHref = location.state ?? '/';
  useEffect(() => {
    async function handleMovieRequest() {
      try {
        const data = await fetchMoviesByID(movieId);
        setMovie(data);
      } catch (error) {
        console.log(error);
      }
    }
    handleMovieRequest();
  }, [movieId]);

  return (
    <div>
      <Link to={backLinkHref}>Back to movie list</Link>
      <div className={css.wrapperCard}>
        <div className={css.imgContainer}>
          <img src={`${baseURLimg}${movie.backdrop_path}`} alt='' />
        </div>
        <div>
          <h2>
            <b>{original_title}</b>
          </h2>
          <ul>
            <li>
              <p>User Score: {vote_average?.toFixed(1)}</p>
            </li>
            <li>
              <h3>Overview</h3>
              <p>{overview}</p>
            </li>
          </ul>
        </div>
      </div>
      <ul className={css.links}>
        <li>
          <Link to='cast'>Read about cast</Link>
        </li>
        <li>
          <Link to='reviews'>Read about reviews</Link>
        </li>
      </ul>

      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;
