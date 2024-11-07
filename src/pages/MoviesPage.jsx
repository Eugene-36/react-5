import { useEffect, useState } from 'react';
import MovieList from '../components/MovieList.jsx';
import SearchBox from '../components/SearchBox.jsx';
import { fetchMoviesByName } from '../api-movies.js';
import { useSearchParams } from 'react-router-dom';

const MoviesPage = () => {
  const [searched, setSearched] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('query') ?? '';

  const updateQueryString = (query) => {
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
  };
  useEffect(() => {
    async function handleMovieSearchRequest() {
      try {
        const data = await fetchMoviesByName(movieName);
        setSearched(data);
        console.log('data', data);
      } catch (error) {
        console.log(error);
      }
    }
    handleMovieSearchRequest();
  }, [movieName]);
  return (
    <div>
      <div>
        <SearchBox onChange={updateQueryString} />
        <MovieList movies={searched} />
      </div>
    </div>
  );
};

export default MoviesPage;
