import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const HomePage = lazy(() => import('./pages/HomePage'));
const MoviesPage = lazy(() => import('./pages/MoviesPage'));
const MovieDetailsPage = lazy(() => import('./pages/MovieDetailsPage'));
const NotFound = lazy(() => import('./pages/NotFoundPage'));
const Navigation = lazy(() => import('./components/Navigation'));
const MovieCast = lazy(() => import('./components/MovieCast'));
const MovieReviews = lazy(() => import('./components/MovieReviews'));

function App() {
  return (
    <>
      <Navigation />
      <Suspense fallback={<div>Loading page...</div>}>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/movies' element={<MoviesPage />} />
          <Route path='/movies/:movieId' element={<MovieDetailsPage />}>
            <Route
              path='cast'
              element={
                <Suspense fallback={<div>Loading cast...</div>}>
                  <MovieCast />
                </Suspense>
              }
            />
            <Route
              path='reviews'
              element={
                <Suspense fallback={<div>Loading reviews...</div>}>
                  <MovieReviews />
                </Suspense>
              }
            />
          </Route>
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
