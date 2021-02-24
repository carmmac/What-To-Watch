import React from "react";
import PropTypes from 'prop-types';
import {filmPropTypes, reviewsPropTypes} from "../../prop-types";
import ReviewItem from "../review-item/review-item";

const FilmPageReviews = ({reviews}) => {
  return (
    <div className="movie-card__reviews movie-card__row">
      <ul className="movie-card__reviews-col" style={{width: `100%`, maxWidth: `100%`}}>
        {
          (reviews.length === 0 && <span style={{color: `#252525`}}>Add the first review</span>) ||
          (reviews.map((review, i) => <ReviewItem key={`review-${i}`} review={review} />))
        }
      </ul>
    </div>
  );
};

FilmPageReviews.propTypes = {
  film: PropTypes.shape(filmPropTypes),
  reviews: reviewsPropTypes,
};

export default FilmPageReviews;
