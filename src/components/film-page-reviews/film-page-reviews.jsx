import React, {useEffect} from "react";
import PropTypes from 'prop-types';
import {reviewsPropTypes} from "../../prop-types";
import ReviewItem from "../review-item/review-item";
import {connect} from "react-redux";
import {fetchReviews} from "../../store/api-actions";
import Loading from "../loading/loading";

const FilmPageReviews = ({reviews, id, isLoadedIndicator, onLoadReviews}) => {
  useEffect(() => {
    if (!isLoadedIndicator.areReviewsLoaded) {
      onLoadReviews(id);
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

const mapStateToProps = (state) => ({
  isLoadedIndicator: state.isLoadedIndicator,
  reviews: state.reviews,
});

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const {dispatch} = dispatchProps;
  return {
    ...stateProps,
    ...ownProps,
    onLoadReviews(id) {
      dispatch(fetchReviews(id));
    }
  };
};

FilmPageReviews.propTypes = {
  reviews: reviewsPropTypes,
  id: PropTypes.number.isRequired,
  isLoadedIndicator: PropTypes.object.isRequired,
  onLoadReviews: PropTypes.func.isRequired,
};

export {FilmPageReviews};
export default connect(mapStateToProps, null, mergeProps)(FilmPageReviews);
