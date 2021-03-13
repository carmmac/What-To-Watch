import React, {useRef, useState} from 'react';
import PropTypes from 'prop-types';
import {RatingScore} from '../../const';
import RatingInput from '../rating/rating-input';

const ReviewForm = ({handleReviewSubmit}) => {
  const [userRating, setUserRating] = useState(3);
  const reviewTextRef = useRef();
  const handleUserRatingChange = (newRating) => setUserRating(newRating);

  return (
    <form
      action="#"
      className="add-review__form"
      onSubmit={(evt) => {
        evt.preventDefault();
        handleReviewSubmit(userRating, reviewTextRef.current.value);
      }}
    >
      <div className="rating">
        <div className="rating__stars">
          {new Array(RatingScore.MAX).fill().map((_, i) =>
            <RatingInput
              key={`review_input${i}`}
              ratingScore={i + 1}
              handleUserRatingChange={handleUserRatingChange}
            />)}
        </div>
      </div>
      <div className="add-review__text">
        <textarea
          className="add-review__textarea"
          name="review-text"
          id="review-text"
          placeholder="Review text"
          ref={reviewTextRef}>
        </textarea>
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit">Post</button>
        </div>
      </div>
    </form>
  );
};

ReviewForm.propTypes = {handleReviewSubmit: PropTypes.func.isRequired};

export default ReviewForm;
