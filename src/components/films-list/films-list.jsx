import React from 'react';
import {filmsMockPropTypes} from '../../prop-types';
import FilmCard from '../film-card/film-card';

const FilmsList = ({films}) => {
  return (
    <div className="catalog__movies-list">
      {films.map((film) =>
        <FilmCard
          key={film.id}
          {...film}
        />
      )}
    </div>
  );
};

FilmsList.propTypes = filmsMockPropTypes;

export default FilmsList;
