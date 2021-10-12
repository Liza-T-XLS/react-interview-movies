// == Imports

import React from 'react';
import PropTypes from 'prop-types';

import './deleteButton.scss';

// == Component

const DeleteButton = ({ movies, movieId, deleteMovie, filterByCategory }) => {
  const deleteButtonOnClickHandler = () => {
    const movieCategory = movies.find((movie) => movie.id === movieId).category;
    const moviesOfSameCategory = movies.filter((movie) => movie.category === movieCategory);
    if (moviesOfSameCategory.length <= 1) {
      filterByCategory('0');
    };
    deleteMovie(movieId);
  };

  return (
    <button type="button" className="deleteButton" title="delete card" onClick={deleteButtonOnClickHandler}>&times;</button>
  );
} 

// == PropTypes

DeleteButton.propTypes = {
  movies: PropTypes.array.isRequired,
  movieId: PropTypes.string.isRequired,
  deleteMovie: PropTypes.func.isRequired,
  filterByCategory: PropTypes.func.isRequired,
};

// == Export

export default DeleteButton;
