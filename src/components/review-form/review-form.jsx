import React, {memo, useCallback, useRef, useState} from 'react';
import PropTypes from 'prop-types';
import {DEFAULT_RATING, RatingScore, REVIEW_TEXT_MAX_LENGTH, REVIEW_TEXT_MIN_LENGTH} from '../../const';
import RatingInput from '../rating/rating-input';

const ReviewForm = ({handleReviewSubmit}) => {
  const [userRating, setUserRating] = useState(DEFAULT_RATING);
  const [isDisabled, setIsDisabled] = useState(false);
  const reviewTextRef = useRef();
  const handleUserRatingChange = useCallback((newRating) => setUserRating(newRating), []);

  const renderRatingInput = (ratingValue) => {
    let isChecked = false;
    if (ratingValue === DEFAULT_RATING) {
      isChecked = true;
    }
    return <RatingInput
      key={`review_input${ratingValue}`}
      ratingScore={ratingValue}
      handleUserRatingChange={handleUserRatingChange}
      isChecked={isChecked}
      isDisabled={isDisabled}
    />;
  };

  const unblockForm = () => {
    setIsDisabled(false);
  };

  return (
    <form
      action="#"
      className="add-review__form"
      onSubmit={(evt) => {
        evt.preventDefault();
        setIsDisabled(true);
        handleReviewSubmit(userRating, reviewTextRef.current.value, unblockForm);
      }}
    >
      <div className="rating">
        <div className="rating__stars">
          {new Array(RatingScore.MAX).fill().map((_, i) => renderRatingInput(i + 1))}
        </div>
      </div>
      <div className="add-review__text">
        <textarea
          className="add-review__textarea"
          name="review-text"
          id="review-text"
          placeholder="Review text"
          disabled={isDisabled}
          ref={reviewTextRef}
          maxLength={REVIEW_TEXT_MAX_LENGTH}
          minLength={REVIEW_TEXT_MIN_LENGTH}>
        </textarea>
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit">Post</button>
        </div>
      </div>
    </form>
  );
};

ReviewForm.propTypes = {handleReviewSubmit: PropTypes.func.isRequired};

export default memo(ReviewForm);
