// == Imports

import React from 'react';
import PropTypes from 'prop-types';

import './deleteButton.scss';

// == Component

const DeleteButton = ({ movies, movieId, deleteMovie, filterByCategory, currentPage, setCurrentPage, numberPerPage }) => {
  const deleteButtonOnClickHandler = () => {
    const movieCategory = movies.find((movie) => movie.id === movieId).category;
    const moviesOfSameCategory = movies.filter((movie) => movie.category === movieCategory);
    if (moviesOfSameCategory.length <= 1) {
      filterByCategory('0');
    };
    if (currentPage > (Math.ceil((moviesOfSameCategory.length - 1) / numberPerPage))) {
      setCurrentPage(1);
    }
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
  currentPage: PropTypes.number.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
  numberPerPage: PropTypes.number.isRequired,
};

// == Export

export default DeleteButton;
