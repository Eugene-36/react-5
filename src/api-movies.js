import axios from 'axios';

const apiKey = import.meta.env.VITE_API_KEY_OF_ACCESS;

const api = axios.create({
  method: 'GET',
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${apiKey}`,
  },
});

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

//Request to API
export const fetchMovies = async () => {
  const response = await api.get(`/trending/movie/week?language=en-US`);
  return response.data.results;
};
export const fetchMoviesByID = async (movie_id) => {
  const response = await api.get(`/movie/${movie_id}?language=en-US`);
  return response.data;
};

export const fetchMoviesByName = async (movie_name) => {
  const response = await api.get(
    `/search/movie?query=${movie_name}&include_adult=false&language=en-US&page=1'`
  );
  return response.data.results;
};

export const fetchMoviesByCredits = async (movie_id) => {
  const response = await api.get(`/movie/${movie_id}/credits`);

  return response.data.cast;
};

export const fetchMoviesByReview = async (movie_id) => {
  const response = await api.get(`/movie/${movie_id}/reviews`);

  return response.data.results;
};
