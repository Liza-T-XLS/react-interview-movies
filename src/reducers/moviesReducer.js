// == Imports

// import { movies$ } from '../data/movies';

import { SAVE_MOVIES, DELETE_MOVIE } from '../actions/movies';

// == Initial State

const initialState = {
  movies: [],
};

// == Reducer

const moviesReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_MOVIES: 
      return {
        ...state,
        movies: action.data,
      };
    case DELETE_MOVIE: {
      const newMovies = [...state.movies.filter((movie) => movie.id !== action.movieId)];
      return {
        ...state,
        movies: newMovies,
      };
    }
    default: return state;
  }
};

// == Export

export default moviesReducer;