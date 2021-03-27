import React, {useMemo} from 'react';
import {useSelector} from 'react-redux';
import FilmsList from '../films-list/films-list.jsx';
import Loading from '../loading/loading.jsx';
import Logo from '../logo/logo.jsx';
import UserBlock from '../user-block/user-block.jsx';
import {makeGetAreFavoriteFilmsLoadedIndicator, makeGetFavoriteFilms} from '../../store/data-reducer/selectors.js';

const UserListPage = () => {

  const getAreFavoriteFilmsLoadedIndicator = useMemo(makeGetAreFavoriteFilmsLoadedIndicator, []);
  const areFavoriteFilmsLoaded = useSelector((state) => getAreFavoriteFilmsLoadedIndicator(state));

  const getFavoriteFilms = useMemo(makeGetFavoriteFilms, []);
  const favoriteFilms = useSelector((state) => getFavoriteFilms(state));

  if (!areFavoriteFilmsLoaded) {
    return <Loading />;
  }

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo/>
        <h1 className="page-title user-page__title">My list</h1>
        <UserBlock />
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <FilmsList films={favoriteFilms} />
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
  );
};

export default UserListPage;
