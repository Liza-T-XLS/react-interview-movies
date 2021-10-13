// == Imports

import React from 'react';
import PropTypes from 'prop-types';

import './card.scss';

import DeleteButton from '../../containers/Card/DeleteButton';
import Gauge from '../../containers/Card/Gauge';
import Review from '../../containers/Card/Review';

// == Component

const Card = ({ movie, pageQuantity }) => {
  return (
    <div className="card">
      <DeleteButton movieId={movie.id} pageQuantity={pageQuantity} />
      <h2 className="title">{movie.title}</h2>
      <span>{movie.category}</span>
      <Gauge likes={movie.likes} dislikes={movie.dislikes} />
      <Review movieId={movie.id} />
    </div>
  );
} 

// == PropTypes

Card.propTypes = {
  movie: PropTypes.object.isRequired,
  pageQuantity: PropTypes.number.isRequired,
};

// == Export

export default Card;
