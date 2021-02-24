import React, {useState} from 'react';
import FilmsList from '../films-list/films-list.jsx';
import {appPropTypes} from '../../prop-types.js';
import Logo from '../logo/logo.jsx';
import UserBlock from '../user-block/user-block.jsx';
import FilmBackgroundBlock from '../film-bg/film-background-block.jsx';
import GenreItem from '../genre-item/genre-item.jsx';
import {defaultGenreTab} from '../../const.js';

const Main = ({
  promoFilm: {
    name,
    genre,
    released,
    posterImage,
    backgroundImage
  },
  films, reviews
}) => {
  const [selectedGenreTab, setSelectedGenreTab] = useState(defaultGenreTab);
  const handleGenreSelect = (tabName) => {
    setSelectedGenreTab(tabName);
  };

  const genres = films.reduce((acc, film) => {
    if (!acc.some((item) => item === film.genre)) {
      acc.push(film.genre);
    }
    return acc;
  }, [defaultGenreTab]);

  return <>
    <section className="movie-card">
      <FilmBackgroundBlock backgroundImage={backgroundImage} />

      <h1 className="visually-hidden">WTW</h1>

      <header className="page-header movie-card__head">
        <Logo/>

        <UserBlock/>
      </header>

      <div className="movie-card__wrap">
        <div className="movie-card__info">
          <div className="movie-card__poster">
            <img src={posterImage} alt={name + ` poster`} width="218"
              height="327" />
          </div>

          <div className="movie-card__desc">
            <h2 className="movie-card__title">{name}</h2>
            <p className="movie-card__meta">
              <span className="movie-card__genre">{genre}</span>
              <span className="movie-card__year">{released}</span>
            </p>

            <div className="movie-card__buttons">
              <button className="btn btn--play movie-card__button" type="button">
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s"></use>
                </svg>
                <span>Play</span>
              </button>
              <button className="btn btn--list movie-card__button" type="button">
                <svg viewBox="0 0 19 20" width="19" height="20">
                  <use xlinkHref="#add"></use>
                </svg>
                <span>My list</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div className="page-content">
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <ul className="catalog__genres-list">
          {genres.map((genreItem, i) =>
            <GenreItem
              key={genreItem + i}
              genre={genreItem}
              selectedGenreTab={selectedGenreTab}
              handleGenreSelect={handleGenreSelect}
            />)}
        </ul>

        <FilmsList films={films} reviews={reviews} />

        <div className="catalog__more">
          <button className="catalog__button" type="button">Show more</button>
        </div>
      </section>

      <footer className="page-footer">
        <div className="logo">
          <a className="logo__link logo__link--light">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  </>;
};

Main.propTypes = appPropTypes;

export default Main;
