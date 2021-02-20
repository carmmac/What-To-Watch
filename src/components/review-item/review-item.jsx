import React from "react";
import PropTypes from 'prop-types';
import {reviewMockPropTypes} from "../../prop-types";
import {humanizeDate} from "../../utils";

const ReviewItem = ({review}) => {
  const {user} = review;
  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">
          {review.comment}
        </p>

        <footer className="review__details">
          <cite className="review__author">{user.name}</cite>
          <time className="review__date" dateTime={humanizeDate(`YYYY-MM-DD`, review.date)}>
            {humanizeDate(`MMMM DD, YYYY`, review.date)}
          </time>
        </footer>
      </blockquote>

      <div className="review__rating">{review.rating}</div>
    </div>
  );
};

ReviewItem.propTypes = {
  review: PropTypes.shape(reviewMockPropTypes),
};

export default ReviewItem;
