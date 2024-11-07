import { useEffect, useState } from 'react';

import MovieList from '../components/MovieList.jsx';
import { fetchMovies } from '../api-movies.js';
const HomePage = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function handleMoviesRequest() {
      try {
        // setLoader(true);
        // setGallery([]);
        // setCounter(10);
        // setError(false);
        const data = await fetchMovies();
        setMovies(data);
        // console.log('data', data);
        // setGallery(data);
      } catch (error) {
        // setError(true);
        console.log(error);
      } finally {
        // setLoader(false);
      }
    }
    handleMoviesRequest();
  }, []);
  return (
    <div>
      <MovieList movies={movies} />
    </div>
  );
};

export default HomePage;
