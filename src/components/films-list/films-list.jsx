import React from 'react';
import PropTypes from 'prop-types';
import {useSelector} from 'react-redux';
import {ALL_GENRES, FilmsListLocation} from '../../const';
import FilmCard from '../film-card/film-card';
import Loading from '../loading/loading';

const FilmsList = ({filmsVisibleNum, genre, id, location, handleFilmCardClick}) => {

  const {films, isLoadedIndicator} = useSelector((state) => state.DATA);

  if (!isLoadedIndicator.areFilmsLoaded) {
    return <Loading />;
  }

  const getFilmsByLocation = () => {
    switch (location) {
      case FilmsListLocation.MAIN:
        if (genre === ALL_GENRES) {
          return films.slice(0, filmsVisibleNum);
        }
        return films.slice().filter((film) => film.genre === genre).slice(0, filmsVisibleNum);

      case FilmsListLocation.FILM_PAGE:
        return films.slice().filter((film) => film.genre === genre && film.id !== id);

      default: return [];
    }
  };

  return (
    <div className="catalog__movies-list">
      {getFilmsByLocation()
        .map((film) => <FilmCard handleFilmCardClick={handleFilmCardClick} key={film.id} {...film} />)}
    </div>
  );
};

FilmsList.propTypes = {
  id: PropTypes.number,
  filmsVisibleNum: PropTypes.number,
  location: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  handleFilmCardClick: PropTypes.func,
};

export default FilmsList;
