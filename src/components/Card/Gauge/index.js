// == Imports

import React from 'react';
import PropTypes from 'prop-types';

import './gauge.scss';

// == Component

const Gauge = ({likes, dislikes}) => {
  const likesWidth = likes * 100 / (dislikes + likes);
  const likesStyle = {
    width: likesWidth+'%',
  };
  const title = likes+' / '+dislikes;

  return (
    <div className="gauge" title={title}>
      <div className="likes" style={likesStyle}></div>
    </div>
  );
} 

// == PropTypes

Gauge.propTypes = {
  likes: PropTypes.number.isRequired,
  dislikes: PropTypes.number.isRequired,
};

// == Export

export default Gauge;
