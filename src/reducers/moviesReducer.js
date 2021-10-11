// == Imports

// import { movies$ } from '../data/movies';

import { SAVE_MOVIES } from '../actions/movies';

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
    default: return state;
  }
};

// == Export

export default moviesReducer;