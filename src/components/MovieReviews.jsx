import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMoviesByReview } from '../api-movies.js';
import parse from 'html-react-parser';

import css from './MovieReviews.module.css';
const MovieReviews = () => {
  const [reviews, setReview] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId || reviews.length > 0) return;
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
  }, [movieId, reviews]);
  return (
    <div className={css.containerReviews}>
      {reviews.length > 0 ? (
        reviews.map(({ author, content, id }) => (
          <ul key={id}>
            <li>{author}</li>
            <li>
              <p>{parse(content)}</p>
            </li>
          </ul>
        ))
      ) : (
        <div>There is now review</div>
      )}
    </div>
  );
};

export default MovieReviews;
