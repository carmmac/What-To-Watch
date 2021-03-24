import React from 'react';
import PropTypes from 'prop-types';
import {filmPropTypes} from '../../prop-types';
import {humanizeFilmRating} from '../../utils';

const FilmPageOverview = ({film}) => {
  return <>
    <div className="movie-rating">
      <div className="movie-rating__score">{film.rating}</div>
      <p className="movie-rating__meta">
        <span className="movie-rating__level">{humanizeFilmRating(film.rating)}</span>
        <span className="movie-rating__count">{`${film.scoresCount} ratings`}</span>
      </p>
    </div>

    <div className="movie-card__text">
      <p>{film.description}</p>

      <p className="movie-card__director"><strong>{`Director: ${film.director}`}</strong></p>

      <p className="movie-card__starring"><strong>{`Starring: ${film.starring.map((star) => ` ${star}`)} and others`}</strong></p>
    </div>
  </>;
};

FilmPageOverview.propTypes = {
  film: PropTypes.shape(filmPropTypes)
};

export default FilmPageOverview;
