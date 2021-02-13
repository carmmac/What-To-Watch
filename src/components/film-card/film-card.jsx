import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {filmMockPropTypes} from '../../prop-types';

const FilmCard = (props) => {
  const {id, name, previewImage} = props.filmData;
  return (
    <article className="small-movie-card catalog__movies-card">
      <div className="small-movie-card__image">
        <img src={previewImage} alt={name} width="280" height="175" />
      </div>
      <h3 className="small-movie-card__title">
        <Link className="small-movie-card__link" to={`/films/${id}`}>{name}</Link>
      </h3>
    </article>
  );
};
FilmCard.propTypes = {
  filmData: PropTypes.shape(filmMockPropTypes)
};

export default FilmCard;
