import React, {useEffect, useMemo, useState} from 'react';
import FilmsList from '../films-list/films-list.jsx';
import Logo from '../logo/logo.jsx';
import UserBlock from '../user-block/user-block.jsx';
import FilmBackgroundBlock from '../film-bg/film-background-block.jsx';
import GenreList from '../genre-list/genre-list.jsx';
import {useDispatch, useSelector} from 'react-redux';
import LoadMoreButton from '../load-more-button/load-more-button.jsx';
import Loading from '../loading/loading.jsx';
import {genreSelect} from '../../store/action.js';
import {ALL_GENRES} from '../../const.js';
import {fetchPromoFilm} from '../../store/api-actions.js';
import {makeGetFilms, makeGetIsPromoFilmLoadedIndicator, makeGetAreFilmsLoadedIndicator, getPromoFilm} from '../../store/data-reducer/selectors.js';
import WithGenreFiltration from '../../hocs/with-genre-filtration.jsx';

const Main = () => {

  const promoFilm = useSelector((state) => getPromoFilm(state));
  const {initialFilmsVisibleNum, filmsToShowPerClickNum} = useSelector((state) => state.UTILITY);

  const getFilms = useMemo(makeGetFilms, []);
  const films = useSelector((state) => getFilms(state));

  const getIsPromoFilmLoadedIndicator = useMemo(makeGetIsPromoFilmLoadedIndicator, []);
  const ispromoFilmLoaded = useSelector((state) => getIsPromoFilmLoadedIndicator(state));

  const getAreFilmsLoadedIndicator = useMemo(makeGetAreFilmsLoadedIndicator, []);
  const areFilmsLoaded = useSelector((state) => getAreFilmsLoadedIndicator(state));

  const [filmsToShow, setFilmsToShow] = useState(films);
  const [filmsVisibleNum, setFilmsVisibleNum] = useState(initialFilmsVisibleNum);
  const [currentGenre, setCurrentGenre] = useState(ALL_GENRES);

  const dispatch = useDispatch();

  const onLoadPromoFilm = () => {
    if (!ispromoFilmLoaded) {
      dispatch(fetchPromoFilm());
    }
  };

  const handleLoadMoreFilmsClick = () => {
    setFilmsVisibleNum(filmsVisibleNum + filmsToShowPerClickNum);
  };

  const handleGenreSelect = (newGenre) => {
    dispatch(genreSelect(newGenre));
    setFilmsToShow(
        newGenre === ALL_GENRES ? films : films.filter((film) => film.genre === newGenre)
    );
    setCurrentGenre(newGenre);
  };

  useEffect(() => {
    onLoadPromoFilm();
    setFilmsToShow(films);
  }, [ispromoFilmLoaded, areFilmsLoaded]);

  if (!ispromoFilmLoaded) {
    return (<Loading />);
  }

  return <>
    <section className="movie-card">
      <FilmBackgroundBlock backgroundImage={promoFilm.backgroundImage} name={promoFilm.name} />
      <h1 className="visually-hidden">WTW</h1>
      <header className="page-header movie-card__head">
        <Logo/>
        <UserBlock/>
      </header>

      <div className="movie-card__wrap">
        <div className="movie-card__info">
          <div className="movie-card__poster">
            <img src={promoFilm.posterImage} alt={promoFilm.name + ` poster`} width="218"
              height="327" />
          </div>

          <div className="movie-card__desc">
            <h2 className="movie-card__title">{promoFilm.name}</h2>
            <p className="movie-card__meta">
              <span className="movie-card__genre">{promoFilm.genre}</span>
              <span className="movie-card__year">{promoFilm.released}</span>
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
        <GenreList currentGenre={currentGenre} handleGenreSelect={handleGenreSelect} />

        <WithGenreFiltration component={FilmsList} genre={currentGenre} filmsVisibleNum={filmsVisibleNum} />

        {
          filmsToShow.length > filmsVisibleNum &&
          <LoadMoreButton handleLoadMoreFilmsClick={handleLoadMoreFilmsClick} />
        }
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

export default Main;
