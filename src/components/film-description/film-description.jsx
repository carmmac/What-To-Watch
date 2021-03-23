import React from 'react';
import PropTypes from 'prop-types';
import {useDispatch, useSelector} from 'react-redux';
import {filmPropTypes} from '../../prop-types';
import {postFvoriteFilm} from '../../store/api-actions';
import {AuthorizationStatus, DescriptionBlockVersion} from '../../const';
import {Link} from 'react-router-dom';

const FilmDescription = ({film, version}) => {

  const {authorizationStatus} = useSelector((state) => state.USER);
  const dispatch = useDispatch();

  const {id, isFavorite: status} = film;

  const handleFavoriteClick = () => {
    dispatch(postFvoriteFilm(id, status));
  };

  const renderButtonSection = () => {
    if (authorizationStatus === AuthorizationStatus.AUTH) {
      return <>
        <button className="btn btn--list movie-card__button" type="button" onClick={handleFavoriteClick}>
          <svg viewBox="0 0 19 20" width="19" height="20">
            <use xlinkHref="#add"></use>
          </svg>
          <span>My list</span>
        </button>
        {
          version === DescriptionBlockVersion.FILM_PAGE &&
          <Link to={`${id}/review`} className="btn movie-card__button">Add review</Link>
        }
      </>;
    }
    return null;
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
          renderButtonSection()
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
