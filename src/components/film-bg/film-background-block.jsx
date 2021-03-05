import React from 'react';
import PropTypes from 'prop-types';

const FilmBackgroundBlock = ({backgroundImage, name}) => {
  return (
    <div className="movie-card__bg">
      <img src={backgroundImage} alt={name} />
    </div>
  );
};

FilmBackgroundBlock.propTypes = {
  backgroundImage: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default FilmBackgroundBlock;
