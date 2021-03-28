import React, {useEffect} from "react";
import PropTypes from 'prop-types';
import ReviewItem from "../review-item/review-item";
import {useDispatch, useSelector} from "react-redux";
import {fetchReviews} from "../../store/api-actions";
import Loading from "../loading/loading";
import {getAreReviewsLoadedIndicator, getReviews} from "../../store/data-reducer/selectors";
import {Link} from "react-router-dom";
import {AppRoute, AuthorizationStatus} from "../../const";

const FilmPageReviews = ({id}) => {
  const reviews = useSelector((state) => getReviews(state));
  const areReviewsLoaded = useSelector((state) => getAreReviewsLoadedIndicator(state));

  const {authorizationStatus} = useSelector((state) => state.USER);
  const dispatch = useDispatch();

  const renderReviews = () => {
    if (reviews.length === 0) {
      return (
        <Link to={`${id}/review`} style={{color: `#252525`}}>Add the first review</Link>
      );
    }
    return (
      reviews.map((review, i) => <ReviewItem key={`review-${i}`} review={review} />)
    );
  };
  useEffect(() => {
    if (!areReviewsLoaded) {
      dispatch(fetchReviews(id));
    }
  }, [areReviewsLoaded]);

  if (!areReviewsLoaded) {
    return <Loading />;
  }
  return (
    <div className="movie-card__reviews movie-card__row">
      <ul className="movie-card__reviews-col" style={{width: `100%`, maxWidth: `100%`}}>
        {
          authorizationStatus === AuthorizationStatus.AUTH && renderReviews()
          ||
          <Link to={AppRoute.LOGIN} style={{color: `#252525`}}>Sign in to add the first review</Link>
        }
      </ul>
    </div>
  );
};

FilmPageReviews.propTypes = {id: PropTypes.number.isRequired};

export default FilmPageReviews;
