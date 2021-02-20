import React from "react";
import PropTypes from 'prop-types';
import {filmMockPropTypes, reviewsMockPropTypes} from "../../prop-types";
import ReviewItemsContainer from "../review-items-container/review-items-container";
import ReviewItem from "../review-item/review-item";
import {renderReviews} from "../../utils";

const FilmPageReviews = ({reviews}) => {
  return (
    <div className="movie-card__reviews movie-card__row">
      {
        reviews.length === 0
          ? <span>Оставьте первый комментарий</span>
          : renderReviews(reviews, ReviewItemsContainer, ReviewItem)
      }
    </div>
  );
};

FilmPageReviews.propTypes = {
  film: PropTypes.shape(filmMockPropTypes),
  reviews: reviewsMockPropTypes,
};

export default FilmPageReviews;
