import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {RatingScore} from '../../const';
import RatingInput from '../rating/rating-input';

const ReviewForm = (props) => {
  const {onPost} = props;
  const [userRating, setUserRating] = useState(3);

  const handleUserRatingChange = (newRating) => setUserRating(newRating);

  return (
    <form
      action="#"
      className="add-review__form"
      onSubmit={(evt) => {
        evt.preventDefault();
        onPost(userRating);
      }}
    >
      <div className="rating">
        <div className="rating__stars">
          {new Array(RatingScore.MAX).fill().map((_, i) =>
            <RatingInput
              key={i}
              ratingScore={i + 1}
              handleUserRatingChange={handleUserRatingChange}
            />)}
        </div>
      </div>
      <div className="add-review__text">
        <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text"></textarea>
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit">Post</button>
        </div>
      </div>
    </form>
  );
};

ReviewForm.propTypes = {onPost: PropTypes.func.isRequired};

export default ReviewForm;
