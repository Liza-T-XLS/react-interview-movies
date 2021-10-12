// == Imports

import React from 'react';
import PropTypes from 'prop-types';

import './deleteButton.scss';

// == Component

const DeleteButton = ({movieId, deleteMovie}) => {
  const deleteButtonOnClickHandler = () => {
    deleteMovie(movieId);
  };

  return (
    <button type="button" className="deleteButton" title="delete card" onClick={deleteButtonOnClickHandler}>&times;</button>
  );
} 

// == PropTypes

DeleteButton.propTypes = {
  movieId: PropTypes.string.isRequired,
  deleteMovie: PropTypes.func.isRequired,
};

// == Export

export default DeleteButton;
