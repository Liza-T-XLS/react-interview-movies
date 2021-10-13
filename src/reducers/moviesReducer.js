// == Imports

import {
  SAVE_MOVIES,
  DELETE_MOVIE,
  UPDATE_LIKES,
  UPDATE_DISLIKES,
  FILTER_BY_CATEGORY,
  SET_CURRENT_PAGE,
  SET_NUMBER_PER_PAGE,
  RESET_TO_INITIAL_STATE,
} from '../actions/movies';

// == Initial State

const initialState = {
  movies: [],
  chosenCategory: '0',
  currentPage: 1,
  numberPerPage: 4,
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
    case FILTER_BY_CATEGORY: 
      return {
        ...state,
        chosenCategory: action.category,
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.pageNumber,
      }
    case SET_NUMBER_PER_PAGE:
      return {
        ...state,
        numberPerPage: action.quantity,
      }
    case RESET_TO_INITIAL_STATE:
      return {
        ...state,
        ...initialState,
      }
    default: return state;
  }
};

// == Export

export default moviesReducer;