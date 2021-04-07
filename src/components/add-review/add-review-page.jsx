import React, {useCallback, useEffect, useMemo} from 'react';
import PropTypes from 'prop-types';
import Logo from '../logo/logo';
import UserBlock from '../user-block/user-block';
import FilmBackgroundBlock from '../film-bg/film-background-block';
import ReviewForm from '../review-form/review-form';
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import {fetchFilm, postReview} from '../../store/api-actions';
import Loading from '../loading/loading';
import {getRequestStatus, makeGetFilm, makeGetIsFilmLoadedIndicator} from '../../store/data-reducer/selectors';
import AddReviewMessage from './add-review-message';
import {ComponentStyle, RequestStatus} from '../../const';
import {debounce} from '../../utils';

const AddReviewPage = ({match: {params}}) => {

  const requestStatus = useSelector((state) => getRequestStatus(state));

  const getIsFilmLoadedIndicator = useMemo(makeGetIsFilmLoadedIndicator, []);
  const isFilmLoaded = useSelector((state) => getIsFilmLoadedIndicator(state));

  const getFilm = useMemo(makeGetFilm, []);
  const film = useSelector((state) => getFilm(state));

  const dispatch = useDispatch();
  const {id: filmId} = params;

  const handleReviewSubmit = (rating, comment, callback) => {
    const newReview = {
      rating,
      comment,
    };
    dispatch(postReview(filmId, newReview, callback));
  };

  const debouncedReviewSubmitHandler = useCallback(debounce(handleReviewSubmit));

  useEffect(() => {
    if (!isFilmLoaded) {
      dispatch(fetchFilm(filmId));
    }
  }, [isFilmLoaded]);

  if (!isFilmLoaded) {
    return <Loading />;
  }

  return (
    <section className="movie-card movie-card--full">
      <div className="movie-card__header">
        <FilmBackgroundBlock backgroundImage={film.backgroundImage} name={film.name} />
        <h1 className="visually-hidden">WTW</h1>
        <header className="page-header">
          <Logo/>
          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={`/films/${filmId}`} className="breadcrumbs__link">{film.name}</Link>
              </li>
              <li className="breadcrumbs__item">
                <span className="breadcrumbs__link">Add review</span>
              </li>
            </ul>
          </nav>
          <UserBlock/>
        </header>

        <div className="movie-card__poster movie-card__poster--small">
          <img src={film.posterImage} alt={film.name} style={ComponentStyle.POSTER_IMG} />
        </div>
      </div>

      <div className="add-review">
        <ReviewForm handleReviewSubmit={debouncedReviewSubmitHandler} />
      </div>

      {
        requestStatus !== RequestStatus.VOID &&
        <AddReviewMessage requestStatus={requestStatus} />
      }

    </section>
  );
};

AddReviewPage.propTypes = {
  match: PropTypes.object,
};

export default AddReviewPage;
