import React, {useEffect} from "react";
import PropTypes from 'prop-types';
import ReviewItem from "../review-item/review-item";
import {useDispatch, useSelector} from "react-redux";
import {fetchReviews} from "../../store/api-actions";
import Loading from "../loading/loading";
import {getAreReviewsLoadedIndicator, getReviews} from "../../store/data-reducer/selectors";
import {Link} from "react-router-dom";
import {AppRoute, AuthorizationStatus} from "../../const";
import {FilmPageReviewsStyle} from "./film-page-reviews-style";

const FilmPageReviews = ({id}) => {
  const reviews = useSelector((state) => getReviews(state));
  const areReviewsLoaded = useSelector((state) => getAreReviewsLoadedIndicator(state));

  const {authorizationStatus} = useSelector((state) => state.USER);
  const dispatch = useDispatch();

  const renderReviews = () => {
    if (reviews.length === 0) {
      return (
        authorizationStatus === AuthorizationStatus.AUTH
          ? <Link to={`${id}/review`} style={FilmPageReviewsStyle.LINK}>Add the first review</Link>
          : <Link to={AppRoute.LOGIN} style={FilmPageReviewsStyle.LINK}>Sign in to add the first review</Link>
      );
    }
    return (
      reviews.map((review) => <ReviewItem key={`review_${review.id}`} review={review} />)
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
      <ul className="movie-card__reviews-col" style={FilmPageReviewsStyle.COL}>
        {
          renderReviews()
        }
      </ul>
    </div>
  );
};

FilmPageReviews.propTypes = {id: PropTypes.number.isRequired};

export default FilmPageReviews;
