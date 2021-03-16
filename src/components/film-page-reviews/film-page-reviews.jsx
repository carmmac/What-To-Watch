import React, {useEffect} from "react";
import PropTypes from 'prop-types';
import ReviewItem from "../review-item/review-item";
import {useDispatch, useSelector} from "react-redux";
import {fetchReviews} from "../../store/api-actions";
import Loading from "../loading/loading";

const FilmPageReviews = ({id}) => {
  const {reviews, isLoadedIndicator} = useSelector((state) => state.DATA);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!isLoadedIndicator.areReviewsLoaded) {
      dispatch(fetchReviews(id));
    }
  }, [isLoadedIndicator.areReviewsLoaded]);

  if (!isLoadedIndicator.areReviewsLoaded) {
    return <Loading />;
  }
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

FilmPageReviews.propTypes = {id: PropTypes.number.isRequired};

export default FilmPageReviews;
