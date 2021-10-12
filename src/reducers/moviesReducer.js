// == Imports

import { SAVE_MOVIES, DELETE_MOVIE, UPDATE_LIKES, UPDATE_DISLIKES } from '../actions/movies';

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
      const newMovies = [...state.movies].filter((movie) => movie.id !== action.movieId);
      return {
        ...state,
        movies: newMovies,
      };
    };
    case UPDATE_LIKES: {
      const updatedMovies = [...state.movies].map((movie) =>
        movie.id === action.movieId ? {
        ...movie,
        likes: movie.likes + action.number,
      } : movie);
      return {
        ...state,
        movies: updatedMovies,
      };
    };
    case UPDATE_DISLIKES: {
      const updatedMovies = [...state.movies].map((movie) =>
        movie.id === action.movieId ? {
        ...movie,
        dislikes: movie.dislikes + action.number,
      } : movie);
      return {
        ...state,
        movies: updatedMovies,
      };
    };
    default: return state;
  }
};

// == Export

export default moviesReducer;