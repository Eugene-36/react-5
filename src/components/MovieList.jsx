import { Link, useLocation } from 'react-router-dom';
// FETCH
import css from './MovieList.module.css';

const MovieList = ({ movies }) => {
  const location = useLocation();
  // console.log('location', location);
  return (
    <div className={css.listContainer}>
      {movies?.map(({ title, id }) => (
        <Link key={id} to={`/movies/${id}`} state={location}>
          {title}
        </Link>
      ))}
    </div>
  );
};

export default MovieList;
