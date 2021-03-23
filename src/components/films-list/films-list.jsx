import React from 'react';
import PropTypes from 'prop-types';
import FilmCard from '../film-card/film-card';
import {filmsPropTypes} from '../../prop-types';

const FilmsList = ({films, handleFilmCardClick}) => {

  return (
    <div className="catalog__movies-list">
      {films.map((film) => <FilmCard handleFilmCardClick={handleFilmCardClick} key={film.id} {...film} />)}
    </div>
  );
};

FilmsList.propTypes = {
  films: filmsPropTypes,
  handleFilmCardClick: PropTypes.func,
};

export default FilmsList;
