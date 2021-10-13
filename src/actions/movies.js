// == action types

export const LOAD_MOVIES = 'LOAD_MOVIES';
export const SAVE_MOVIES = 'SAVE_MOVIES';
export const DELETE_MOVIE = 'DELETE_MOVIE';
export const UPDATE_LIKES = 'UPDATE_LIKES';
export const UPDATE_DISLIKES = 'UPDATE_DISLIKES';
export const FILTER_BY_CATEGORY = 'FILTER_BY_CATEGORY';
export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
export const SET_NUMBER_PER_PAGE = 'SET_NUMBER_PER_PAGE';
export const RESET_TO_INITIAL_STATE = 'RESET_TO_INITIAL_STATE';

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

export const setCurrentPage = (pageNumber) => ({
  type: SET_CURRENT_PAGE,
  pageNumber,
});

export const setNumberPerPage = (quantity) => ({
  type: SET_NUMBER_PER_PAGE,
  quantity,
});

export const resetToInitialState = () => ({
  type: RESET_TO_INITIAL_STATE,
})