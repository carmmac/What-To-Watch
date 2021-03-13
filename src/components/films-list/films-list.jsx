import React from 'react';
import {connect} from 'react-redux';
import {ALL_GENRES, FilmsListLocation} from '../../const';
import {filmsPropTypes} from '../../prop-types';
import FilmCard from '../film-card/film-card';
import Loading from '../loading/loading';

const FilmsList = ({films, filmsVisibleNum, isLoadedIndicator, genre, id, location, handleFilmCardClick}) => {
  if (!isLoadedIndicator.areFilmsLoaded) {
    return <Loading />;
  }
  return (
    (location === FilmsListLocation.MAIN &&
      <div className="catalog__movies-list">
        {
          (genre === ALL_GENRES &&
          films.slice(0, filmsVisibleNum)
              .map((film) => <FilmCard key={film.id} {...film} />))
          ||
          films.slice(0, filmsVisibleNum)
              .filter((film) => film.genre === genre)
              .map((film) => <FilmCard key={film.id} {...film} />)
        }
      </div>)
    ||
    (location === FilmsListLocation.FILM_PAGE &&
      <div className="catalog__movies-list">
        {
          films.slice()
               .filter((film) => film.genre === genre && film.id !== id)
               .map((film) => <FilmCard handleFilmCardClick={handleFilmCardClick} key={film.id} {...film} />)
        }
      </div>)
    ||
    (location === FilmsListLocation.USER_LIST &&
      <div className="catalog__movies-list">
        {
          films.slice()
               .filter((film) => film.isFavorite)
               .map((film) => <FilmCard handleFilmCardClick={handleFilmCardClick} key={film.id} {...film} />)
        }
      </div>)
  );
};

const mapStateToProps = (state) => ({
  films: state.films,
  isLoadedIndicator: state.isLoadedIndicator,
});

FilmsList.propTypes = filmsPropTypes;

export {FilmsList};
export default connect(mapStateToProps, null)(FilmsList);
