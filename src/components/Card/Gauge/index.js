// == Imports

import React from 'react';
import PropTypes from 'prop-types';

import './gauge.scss';

import satisfied from '../../../images/satisfied.svg'
import dissatisfied from '../../../images/dissatisfied.svg'

// == Component

const Gauge = ({likes, dislikes}) => {
  const likesWidth = likes * 100 / (dislikes + likes);
  const likesStyle = {
    width: likesWidth+'%',
  };
  const title = likes+' / '+dislikes;

  return (
    <div className="gaugeContainer">
      <div className="gaugeDiv">
        <div className="satisfied">
          <img src={satisfied} className="satisfiedIcon" alt="satisfied icon" />
        </div>
        <div className="gauge" title={title}>
          <div className="likes" style={likesStyle}></div>
        </div>
        <div className="dissatisfied">
          <img src={dissatisfied} className="dissatisfiedIcon" alt="dissatisfied icon" />
        </div>
      </div>
      <div className="countersDiv">
        <span className="likesCounter">{likes}</span>
        <span className="dislikesCounter">{dislikes}</span>
      </div>
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
