import React from 'react';
import {filmsPropTypes} from '../../prop-types';
import FilmCard from '../film-card/film-card';

const FilmsList = ({films, filmsVisibleNum}) => {
  return (
    <div className="catalog__movies-list">
      {
        films.slice(0, filmsVisibleNum).map((film) => <FilmCard key={film.id} {...film} />)
      }
    </div>
  );
};

FilmsList.propTypes = filmsPropTypes;

export default FilmsList;
