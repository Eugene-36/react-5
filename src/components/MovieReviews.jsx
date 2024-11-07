import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMoviesByReview } from '../api-movies.js';
import parse from 'html-react-parser';

import css from './MovieReviews.module.css';
const MovieReviews = () => {
  const [reviews, setReview] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    async function handleMovieReviewRequest() {
      try {
        const data = await fetchMoviesByReview(movieId);
        if (data.length > 0) {
          setReview(data);
        }
      } catch (error) {
        console.log(error);
      }
    }
    handleMovieReviewRequest();
  }, [movieId]);
  return (
    <div className={css.containerReviews}>
      {reviews.map(({ author, content, id }) => (
        <ul key={id}>
          <li>{author}</li>
          <li>
            <p>{parse(content)}</p>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default MovieReviews;
