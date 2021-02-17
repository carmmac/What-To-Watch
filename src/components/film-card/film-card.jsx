import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {filmMockPropTypes} from '../../prop-types';
import PlayerPreview from '../player-preview/player-preview';

const FilmCard = ({id, name, previewImage, previewVideoLink}) => {
  const [startPlayer, setStartPlayer] = useState(false);

  return (
    <article
      className="small-movie-card catalog__movies-card"
      onMouseOver={() => {
        setStartPlayer(true);
      }}
      onMouseLeave={() => {
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
        <Link
          className="small-movie-card__link"
          to={`/films/${id}`}
          onClick={() => setStartPlayer(false)}
        >{name}
        </Link>
      </h3>
    </article>
  );
};

FilmCard.propTypes = filmMockPropTypes;

export default FilmCard;
