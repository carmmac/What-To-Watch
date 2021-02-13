import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {mockPropTypes} from '../../prop-types';
import Logo from '../logo/logo';
import UserBlock from '../user-block/user-block';
import FilmBackgroundBlock from '../film-bg/film-background-block';
import RatingBlock from '../rating/rating-block';

const ReviewAddPage = (props) => {
  const [userRating, setUserRating] = useState(3);
  const {films} = props;
  const {id: filmId} = props.match.params;
  const film = films.find((item) => item.id === parseInt(filmId, 10));
  return (
    <section className="movie-card movie-card--full">
      <div className="movie-card__header">
        {<FilmBackgroundBlock backgroundImage={film.backgroundImage} />}

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          {<Logo/>}

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

          {<UserBlock/>}
        </header>

        <div className="movie-card__poster movie-card__poster--small">
          <img src={film.posterImage} alt={film.name} width="218" height="327" />
        </div>
      </div>

      <div className="add-review">
        <form action="#" className="add-review__form">

          {<RatingBlock state={userRating} setState={setUserRating} />}

          <div className="add-review__text">
            <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text"></textarea>
            <div className="add-review__submit">
              <button className="add-review__btn" type="submit">Post</button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

ReviewAddPage.propTypes = {
  films: mockPropTypes,
  match: PropTypes.object
};

export default ReviewAddPage;
