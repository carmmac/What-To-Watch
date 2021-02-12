import React from 'react';
import {mockPropTypes} from '../../prop-types';
import FilmCard from '../film-card/film-card';

const FilmsList = (props) => {
  const {films} = props;
  return (
    <div className="catalog__movies-list">
      {films.map((film) =>
        <FilmCard
          key={film.id}
          filmData={film}
        />
      )}
    </div>
  );
};

FilmsList.propTypes = mockPropTypes;

export default FilmsList;
