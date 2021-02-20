import React from 'react';
import PropTypes from 'prop-types';
import {filmsMockPropTypes} from '../../prop-types';
import Logo from '../logo/logo';
import UserBlock from '../user-block/user-block';
import FilmBackgroundBlock from '../film-bg/film-background-block';
import ReviewForm from '../review-form/review-form';

const AddReviewPage = (props) => {
  const {films, onPost} = props;
  const {id: filmId} = props.match.params;
  const film = films.find((item) => item.id === parseInt(filmId, 10));

  return (
    <section className="movie-card movie-card--full">
      <div className="movie-card__header">
        <FilmBackgroundBlock backgroundImage={film.backgroundImage} />

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <Logo/>

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <a href="movie-page.html" className="breadcrumbs__link">The Grand Budapest Hotel</a>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
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
        <ReviewForm onPost={onPost} />
      </div>

    </section>
  );
};

AddReviewPage.propTypes = {
  films: filmsMockPropTypes,
  match: PropTypes.object,
  onPost: PropTypes.func.isRequired,
};

export default AddReviewPage;
