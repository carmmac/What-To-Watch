import React from 'react';
import PropTypes from 'prop-types';
import {filmMockPropTypes} from '../../prop-types';

const FilmPageDetails = ({film}) => {

  return (
    <div className="movie-card__text movie-card__row">
      <div className="movie-card__text-col">
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Director</strong>
          <span className="movie-card__details-value">{film.director}</span>
        </p>
        <div className="movie-card__details-item" style={{margin: `19px 0`}}>
          <strong className="movie-card__details-name">Starring</strong>
          <ul className="movie-card__details-value" style={{padding: 0, margin: 0}}>
            {film.starring.map((star, i) =>
              <li
                key={star + i}
                style={{listStyleType: `none`, listStylePosition: `outside`}}
              >{star}
              </li>)}
          </ul>
        </div>
      </div>

      <div className="movie-card__text-col">
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Run Time</strong>
          <span className="movie-card__details-value">{film.runTime}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Genre</strong>
          <span className="movie-card__details-value">{film.genre}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Released</strong>
          <span className="movie-card__details-value">{film.released}</span>
        </p>
      </div>
    </div>
  );
};

FilmPageDetails.propTypes = {
  film: PropTypes.shape(filmMockPropTypes)
};

export default FilmPageDetails;
