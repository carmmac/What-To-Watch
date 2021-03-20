import React, {useMemo} from 'react';
import PropTypes from 'prop-types';
import {useSelector} from 'react-redux';
import {ALL_GENRES, FilmsListLocation} from '../../const';
import FilmCard from '../film-card/film-card';
import Loading from '../loading/loading';
import {makeGetAreFilmsLoadedIndicator, makeGetFilms, makeGetFilmsFilteredByGenre, makeGetFilmsSimilar} from '../../store/data-reducer/selectors';

const FilmsList = ({filmsVisibleNum, genre, id, location, handleFilmCardClick}) => {

  const getAreFilmsLoadedIndicator = useMemo(makeGetAreFilmsLoadedIndicator, []);
  const areFilmsLoaded = useSelector((state) => getAreFilmsLoadedIndicator(state));

  const getFilms = useMemo(makeGetFilms, []);
  const getFilmsFilteredByGenre = useMemo(makeGetFilmsFilteredByGenre, []);
  const getFilmsSimilar = useMemo(makeGetFilmsSimilar, []);

  const films = useSelector((state) => getFilms(state));
  const filmsFiltered = useSelector((state) => getFilmsFilteredByGenre(state, genre));
  const filmsSimilar = useSelector((state) => getFilmsSimilar(state, id));

  if (!areFilmsLoaded) {
    return <Loading />;
  }

  const getFilmsByLocation = () => {
    switch (location) {
      case FilmsListLocation.MAIN:
        if (genre === ALL_GENRES) {
          return films.slice(0, filmsVisibleNum);
        }
        return filmsFiltered.slice(0, filmsVisibleNum);

      case FilmsListLocation.FILM_PAGE:
        return filmsSimilar;

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
