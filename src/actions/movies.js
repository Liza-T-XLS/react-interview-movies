// == action types

export const LOAD_MOVIES = 'LOAD_MOVIES';
export const SAVE_MOVIES = 'SAVE_MOVIES';

// == action creators

export const loadMovies = () => ({
  type: LOAD_MOVIES,
});

export const saveMovies = (data) => ({
  type: SAVE_MOVIES,
  data,
});