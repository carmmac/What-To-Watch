import React from 'react';
import PropTypes from 'prop-types';

const LoadMoreButton = ({handleLoadMoreFilmsClick}) => {
  return (
    <div className="catalog__more">
      <button
        className="catalog__button"
        type="button"
        onClick={() => handleLoadMoreFilmsClick()}
      >Show more
      </button>
    </div>
  );
};

LoadMoreButton.propTypes = {
  handleLoadMoreFilmsClick: PropTypes.func.isRequired,
};

export default LoadMoreButton;
