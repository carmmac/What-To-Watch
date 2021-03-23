import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {useDispatch, useSelector} from 'react-redux';
import {fetchFavoriteFilms} from '../../store/api-actions.js';
import FilmsList from '../films-list/films-list.jsx';
import Loading from '../loading/loading.jsx';
import Logo from '../logo/logo.jsx';
import UserBlock from '../user-block/user-block.jsx';

const UserListPage = (currentLocation) => {

  const {isLoadedIndicator} = useSelector((state) => state.DATA);
  const dispatch = useDispatch();

  const onLoadFavoriteFilms = () => {
    if (!isLoadedIndicator.areFavoriteFilmsLoaded) {
      dispatch(fetchFavoriteFilms());
    }
  };

  useEffect(() => onLoadFavoriteFilms(), [isLoadedIndicator.areFavoriteFilmsLoaded]);

  if (!isLoadedIndicator.areFavoriteFilmsLoaded) {
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
        <FilmsList location={currentLocation} />
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

UserListPage.propTypes = {currentLocation: PropTypes.string.isRequired};


export default UserListPage;
