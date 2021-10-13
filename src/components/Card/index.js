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
      <div className="top">
        <DeleteButton movieId={movie.id} pageQuantity={pageQuantity} />
        <h2 className="title">{movie.title}</h2>
        <span className="category">{movie.category}</span>
      </div>
      <div className="bottom">
        <Gauge likes={movie.likes} dislikes={movie.dislikes} />
        <Review movieId={movie.id} />
      </div>
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
