import React from 'react';
import PropTypes from 'prop-types';

const FilmBackgroundBlock = (props) => {
  const {backgroundImage} = props;
  return (
    <div className="movie-card__bg">
      <img src={backgroundImage} alt="The Grand Budapest Hotel" />
    </div>
  );
};

FilmBackgroundBlock.propTypes = {
  backgroundImage: PropTypes.string.isRequired,
};

export default FilmBackgroundBlock;
