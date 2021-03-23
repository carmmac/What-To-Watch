import React, {useCallback, useEffect, useMemo, useState} from 'react';
import PropTypes from 'prop-types';
import FilmsList from '../films-list/films-list';
import Logo from '../logo/logo';
import UserBlock from '../user-block/user-block';
import FilmBackgroundBlock from '../film-bg/film-background-block';
import FilmPageTabs from '../film-page-tabs/film-page-tabs';
import {useDispatch, useSelector} from 'react-redux';
import Loading from '../loading/loading';
import {fetchFilm} from '../../store/api-actions';
import {makeGetFilm, makeGetIsFilmLoadedIndicator} from '../../store/data-reducer/selectors';
import WithIdFiltration from '../../hocs/with-id-filtration';
import FilmDescription from '../film-description/film-description';
import {DescriptionBlockVersion} from '../../const';

const FilmPage = ({match: {params}}) => {

  const getIsFilmLoadedIndicator = useMemo(makeGetIsFilmLoadedIndicator, []);
  const isFilmLoaded = useSelector((state) => getIsFilmLoadedIndicator(state));

  const getFilm = useMemo(makeGetFilm, []);
  const film = useSelector((state) => getFilm(state));
  const [filmId, setFilmId] = useState(parseInt(params.id, 10));
  const dispatch = useDispatch();

  const handleFilmCardClick = useCallback(
      (newId) => setFilmId(newId),
      []
  );

  const onFilmLoad = () => {
    if (!isFilmLoaded) {
      dispatch(fetchFilm(filmId));
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    onFilmLoad();
  }, [isFilmLoaded]);

  if (!isFilmLoaded) {
    return <Loading />;
  }

  return <>
    <section className="movie-card movie-card--full">
      <div className="movie-card__hero">
        <FilmBackgroundBlock backgroundImage={film.backgroundImage} name={film.name} />
        <h1 className="visually-hidden">WTW</h1>
        <header className="page-header movie-card__head">
          <Logo/>
          <UserBlock/>
        </header>

        <div className="movie-card__wrap">
          <FilmDescription film={film} version={DescriptionBlockVersion.FILM_PAGE} />
        </div>
      </div>

      <div className="movie-card__wrap movie-card__translate-top">
        <div className="movie-card__info">
          <div className="movie-card__poster movie-card__poster--big">
            <img src={film.posterImage} alt={film.name} width="218"
              height="327" />
          </div>
          <FilmPageTabs film={film} filmId={filmId} />
        </div>
      </div>
    </section>

    <div className="page-content">
      <section className="catalog catalog--like-this">
        <h2 className="catalog__title">More like this</h2>
        <WithIdFiltration
          component={FilmsList}
          id={filmId}
          genre={film.genre}
          handleFilmCardClick={handleFilmCardClick}
        />
      </section>

      <footer className="page-footer">
        <div className="logo">
          <a href="main.html" className="logo__link logo__link--light">
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

FilmPage.propTypes = {
  match: PropTypes.object.isRequired,
};

export default FilmPage;
