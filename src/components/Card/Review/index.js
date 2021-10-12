// == Imports

import React from 'react';
import PropTypes from 'prop-types';

import './review.scss';

import thumbUp from '../../../images/thumb_up.svg';
import thumbDown from '../../../images/thumb_down.svg';

// == Component

const Review = ({movieId, deleteMovie}) => {
  const reviewOnClickHandler = () => {
    console.log('reviewed');
  };

  return (
    <div className="review">
      <button type="button" className="likeButton" title="like" onClick={reviewOnClickHandler}>
        <img src={thumbUp} alt="like button" />
      </button>
      <button type="button" className="dislikeButton" title="dislike" onClick={reviewOnClickHandler}>
        <img src={thumbDown} alt="dislike button" />
      </button>
    </div>
  );
} 

// == PropTypes

Review.propTypes = {
  movieId: PropTypes.string.isRequired,
  deleteMovie: PropTypes.func.isRequired,
};

// == Export

export default Review;
