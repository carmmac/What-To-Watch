import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {filmPropTypes} from '../../prop-types';
import Logo from '../logo/logo';
import UserBlock from '../user-block/user-block';
import FilmBackgroundBlock from '../film-bg/film-background-block';
import ReviewForm from '../review-form/review-form';
import {connect} from 'react-redux';
import {Link, useHistory} from 'react-router-dom';
import {fetchFilm, postReview} from '../../store/api-actions';
import Loading from '../loading/loading';

const AddReviewPage = ({film, match: {params}, onReviewPost, isLoadedIndicator, onLoadFilm}) => {
  const {id: filmId} = params;
  const history = useHistory();
  const handleReviewSubmit = (rating, comment) => {
    const newReview = {
      rating,
      comment,
    };
    onReviewPost(filmId, newReview);
    history.push(`/films/${filmId}`);
  };

  useEffect(() => {
    if (!isLoadedIndicator.isFilmLoaded) {
      onLoadFilm(filmId);
    }
  }, [isLoadedIndicator.isFilmLoaded]);

  if (!isLoadedIndicator.isFilmLoaded) {
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
          <img src={film.posterImage} alt={film.name} width="218" height="327" />
        </div>
      </div>

      <div className="add-review">
        <ReviewForm handleReviewSubmit={handleReviewSubmit} />
      </div>

    </section>
  );
};

const mapStateToProps = (state) => ({
  film: state.film,
  isLoadedIndicator: state.isLoadedIndicator,
});

const mapDispatchToProps = (dispatch) => ({
  onReviewPost(filmId, newReview) {
    dispatch(postReview(filmId, newReview));
  },
  onLoadFilm(filmId) {
    dispatch(fetchFilm(filmId));
  },
});

AddReviewPage.propTypes = {
  film: PropTypes.shape(filmPropTypes),
  match: PropTypes.object,
  onReviewPost: PropTypes.func.isRequired,
  isLoadedIndicator: PropTypes.object.isRequired,
  onLoadFilm: PropTypes.func.isRequired,
};

export {AddReviewPage};
export default connect(mapStateToProps, mapDispatchToProps)(AddReviewPage);
