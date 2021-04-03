import React from 'react';
import PropTypes from 'prop-types';
import {filmPropTypes} from '../../prop-types';
import {humanizeTimeForDescription} from '../../utils';
import {FilmPageDetailsStyle} from './film-page-details-style';

const FilmPageDetails = ({film}) => {

  return (
    <div className="movie-card__text movie-card__row">
      <div className="movie-card__text-col">
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Director</strong>
          <span className="movie-card__details-value">{film.director}</span>
        </p>
        <div className="movie-card__details-item" style={FilmPageDetailsStyle.FilmDetails.ITEM}>
          <strong className="movie-card__details-name">Starring</strong>
          <ul className="movie-card__details-value" style={FilmPageDetailsStyle.FilmDetails.VALUE}>
            {film.starring.map((star, i) =>
              <li
                key={`star_${i}`}
                style={{listStyleType: `none`, listStylePosition: `outside`}}
              >{star}
              </li>)}
          </ul>
        </div>
      </div>

      <div className="movie-card__text-col">
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Run Time</strong>
          <span className="movie-card__details-value">{humanizeTimeForDescription(film.runTime)}</span>
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
  film: PropTypes.shape(filmPropTypes)
};

export default FilmPageDetails;
