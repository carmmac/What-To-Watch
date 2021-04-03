import React from "react";
import PropTypes from 'prop-types';
import {reviewPropTypes} from "../../prop-types";
import {humanizeDate} from "../../utils";
import {ReviewItemStyle} from "./review-item-style";

const ReviewItem = ({review, review: {user}}) => {
  return (
    <li className="review" style={ReviewItemStyle}>
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
    </li>
  );
};

ReviewItem.propTypes = {
  review: PropTypes.shape(reviewPropTypes),
};

export default ReviewItem;
