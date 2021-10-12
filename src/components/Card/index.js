// == Imports

import React from 'react';
import PropTypes from 'prop-types';

import './card.scss';

import Gauge from '../../containers/Card/Gauge';

// == Component

const Card = ({movie}) => {
  return (
    <div className="card">
      <h2 className="title">{movie.title}</h2>
      <span>{movie.category}</span>
      <Gauge likes={movie.likes} dislikes={movie.dislikes} />
    </div>
  );
} 

// == PropTypes

Card.propTypes = {
  movie: PropTypes.object.isRequired,
};

// == Export

export default Card;
