import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {filmPropTypes} from '../../prop-types';
import PlayerPreview from '../player-preview/player-preview';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';

const FilmCard = ({id, name, previewImage, previewVideoLink, handleFilmCardClick, onFilmCardClick}) => {
  const [startPlayer, setStartPlayer] = useState(false);
  const [timerId, setTimerId] = useState(null);

  useEffect(() => {
    return () => {
      if (timerId !== null) {
        clearTimeout(timerId);
      }
    };
  });

  return (
    <article
      className="small-movie-card catalog__movies-card"
      onMouseEnter={() => {
        setTimerId(() => setTimeout(() => setStartPlayer(true), 1000));
      }}
      onMouseLeave={() => {
        clearTimeout(timerId);
        setTimerId(null);
        setStartPlayer(false);
      }}
    >
      <div className="small-movie-card__image">
        {
          startPlayer
            ? <PlayerPreview
              previewVideoLink={previewVideoLink}
              previewImage={previewImage}
            />
            : <img src={previewImage} alt={name} width="280" height="175" />
        }
      </div>
      <h3 className="small-movie-card__title">
        {
          (handleFilmCardClick &&
          <Link
            className="small-movie-card__link"
            to={`/films/${id}`}
            onClick={() => {
              setStartPlayer(false);
              handleFilmCardClick(id);
              onFilmCardClick();
            }}
          >{name}
          </Link>)
          ||
          <Link
            className="small-movie-card__link"
            to={`/films/${id}`}
            onClick={() => {
              setStartPlayer(false);
              onFilmCardClick();
            }}
          >{name}
          </Link>
        }
      </h3>
    </article>
  );
};

FilmCard.propTypes = FilmCard.propTypes = {
  filmData: PropTypes.shape(filmPropTypes)
};

const mapDispatchToProps = (dispatch) => ({
  onFilmCardClick() {
    dispatch(ActionCreator.clearData());
  },
});

export {FilmCard};
export default connect(null, mapDispatchToProps)(FilmCard);
