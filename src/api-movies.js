import axios from 'axios';

const apiKey = import.meta.env.VITE_API_KEY_OF_ACCESS;
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${apiKey}`,
  },
};

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

//Request to API
export const fetchMovies = async () => {
  const response = await axios.get(
    `/trending/movie/week?language=en-US`,
    options
  );
  return response.data.results;
};
export const fetchMoviesByID = async (movie_id) => {
  const response = await axios.get(
    `/movie/${movie_id}?language=en-US`,
    options
  );
  return response.data;
};

export const fetchMoviesByName = async (movie_name) => {
  const response = await axios.get(
    `/search/movie?query=${movie_name}&include_adult=false&language=en-US&page=1'`,
    options
  );
  return response.data.results;
};

export const fetchMoviesByCredits = async (movie_id) => {
  const response = await axios.get(`/movie/${movie_id}/credits`, options);

  return response.data.cast;
};

export const fetchMoviesByReview = async (movie_id) => {
  const response = await axios.get(`/movie/${movie_id}/reviews`, options);

  return response.data.results;
};
