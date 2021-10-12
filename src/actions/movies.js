// == action types

export const LOAD_MOVIES = 'LOAD_MOVIES';
export const SAVE_MOVIES = 'SAVE_MOVIES';
export const DELETE_MOVIE = 'DELETE_MOVIE';
export const UPDATE_LIKES = 'UPDATE_LIKES';
export const UPDATE_DISLIKES = 'UPDATE_DISLIKES';
export const FILTER_BY_CATEGORY = 'FILTER_BY_CATEGORY';

// == action creators

export const loadMovies = () => ({
  type: LOAD_MOVIES,
});

export const saveMovies = (data) => ({
  type: SAVE_MOVIES,
  data,
});

export const deleteMovie = (movieId) => ({
  type: DELETE_MOVIE,
  movieId,
});

export const updateLikes = (movieId, number) => ({
  type: UPDATE_LIKES,
  movieId,
  number,
});

export const updateDislikes = (movieId, number) => ({
  type: UPDATE_DISLIKES,
  movieId,
  number,
});

export const filterByCategory = (category) => ({
  type: FILTER_BY_CATEGORY,
  category,
});
