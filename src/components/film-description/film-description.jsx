import React, {useMemo} from 'react';
import PropTypes from 'prop-types';
import {useDispatch, useSelector} from 'react-redux';
import {filmPropTypes} from '../../prop-types';
import {postFilmToFavorites} from '../../store/api-actions';
import {AuthorizationStatus, DescriptionBlockVersion} from '../../const';
import {Link} from 'react-router-dom';
import {makeGetAreFavoriteFilmsLoadedIndicator, makeGetFavoriteFilms} from '../../store/data-reducer/selectors';
import Loading from '../loading/loading';

const FilmDescription = ({film, version}) => {

  const {authorizationStatus} = useSelector((state) => state.USER);
  const dispatch = useDispatch();

  const getAreFavoriteFilmsLoadedIndicator = useMemo(makeGetAreFavoriteFilmsLoadedIndicator, []);
  const areFavoriteFilmsLoaded = useSelector((state) => getAreFavoriteFilmsLoadedIndicator(state));

  const getFavoriteFilms = useMemo(makeGetFavoriteFilms, []);
  const favoriteFilms = useSelector((state) => getFavoriteFilms(state));

  const isFilmFavorite = () => {
    return favoriteFilms.some((favoriteFilm) => favoriteFilm.id === film.id);
  };

  const handleFavoriteClick = () => {
    dispatch(postFilmToFavorites(film.id, film.isFavorite));
  };

  if (!areFavoriteFilmsLoaded) {
    return <Loading />;
  }

  const renderPrivateButtonSection = () => {
    return <>
      {
        (!isFilmFavorite() &&
        <button className="btn btn--list movie-card__button" type="button" onClick={handleFavoriteClick}>
          <svg viewBox="0 0 19 20" width="19" height="20">
            <use xlinkHref="#add"></use>
          </svg>
          <span>My list</span>
        </button>)
        ||
        (<button className="btn btn--list movie-card__button" type="button">
          <svg viewBox="0 0 18 14" width="18" height="14">
            <use xlinkHref="#in-list"></use>
          </svg>
          <span>My list</span>
        </button>)
      }
      {
        version === DescriptionBlockVersion.FILM_PAGE &&
        <Link to={`${film.id}/review`} className="btn movie-card__button">Add review</Link>
      }
    </>;
  };

  return (
    <div className="movie-card__desc">
      <h2 className="movie-card__title">{film.name}</h2>
      <p className="movie-card__meta">
        <span className="movie-card__genre">{film.genre}</span>
        <span className="movie-card__year">{film.released}</span>
      </p>

      <div className="movie-card__buttons">
        <button className="btn btn--play movie-card__button" type="button">
          <svg viewBox="0 0 19 19" width="19" height="19">
            <use xlinkHref="#play-s"></use>
          </svg>
          <span>Play</span>
        </button>
        {
          authorizationStatus === AuthorizationStatus.AUTH && renderPrivateButtonSection()
        }
      </div>
    </div>
  );
};

FilmDescription.propTypes = {
  film: PropTypes.shape(filmPropTypes),
  version: PropTypes.string,
};

export default FilmDescription;
