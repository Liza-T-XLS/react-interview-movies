// == Imports

import { LOAD_MOVIES, saveMovies } from '../actions/movies';
import { movies$ } from '../data/movies';

// == Middleware

const moviesMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case LOAD_MOVIES:
        movies$
        .then((response) => {
          console.log(response);
          store.dispatch(saveMovies(response));
        })
        .catch((error) => {
          console.warn(error);
        });
      next(action);
      break;

    default:
      next(action);
  }
};

// == Export

export default moviesMiddleware;