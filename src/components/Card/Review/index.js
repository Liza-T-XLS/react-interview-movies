// == Imports

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './review.scss';

import thumbUp from '../../../images/thumb_up.svg';
import thumbDown from '../../../images/thumb_down.svg';

// == Component

const Review = ({ movieId, updateLikes, updateDislikes }) => {
  const [reviewStatus, setReviewStatus] = useState(false);
  const [review, setReview] = useState(null);

  const likeButtonClassName = classNames('likeButton', { active: review === 'like' });
  const dislikeButtonClassName = classNames('dislikeButton', { active: review === 'dislike' });

  const positiveReviewOnClickHandler = () => {
    if (!reviewStatus) {
      setReviewStatus(true);
      setReview('like');
      updateLikes(movieId, 1);
    }
    if (reviewStatus && review === 'like') {
      updateLikes(movieId, -1);
      setReview(null);
      setReviewStatus(false);
    }
    if (reviewStatus && review === 'dislike') {
      updateDislikes(movieId, -1);
      updateLikes(movieId, 1);
      setReview('like');
    }
  };

  const negativeReviewOnClickHandler = () => {
    if (!reviewStatus) {
      setReviewStatus(true);
      setReview('dislike');
      updateDislikes(movieId, 1);
    }
    if (reviewStatus && review === 'dislike') {
      updateDislikes(movieId, -1);
      setReview(null);
      setReviewStatus(false);
    }
    if (reviewStatus && review === 'like') {
      updateLikes(movieId, -1);
      updateDislikes(movieId, 1);
      setReview('dislike');
    }
  };

  return (
    <div className="review">
      <button type="button" className={likeButtonClassName} title="like" onClick={positiveReviewOnClickHandler}>
        <img src={thumbUp} alt="like button" />
      </button>
      <button type="button" className={dislikeButtonClassName} title="dislike" onClick={negativeReviewOnClickHandler}>
        <img src={thumbDown} alt="dislike button" />
      </button>
    </div>
  );
} 

// == PropTypes

Review.propTypes = {
  movieId: PropTypes.string.isRequired,
  updateLikes: PropTypes.func.isRequired,
  updateDislikes: PropTypes.func.isRequired,
};

// == Export

export default Review;
