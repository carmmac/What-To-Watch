import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

const LoadMoreButton = ({filmsToLoadNum, filmsVisibleNum, handleLoadMoreFilmsClick}) => {
  return (
    <div className="catalog__more">
      <button
        className="catalog__button"
        type="button"
        onClick={() => handleLoadMoreFilmsClick(filmsVisibleNum + filmsToLoadNum)}
      >Show more
      </button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  filmsToLoadNum: state.filmsToLoadNum,
});

LoadMoreButton.propTypes = {
  filmsToLoadNum: PropTypes.number.isRequired,
  filmsVisibleNum: PropTypes.number.isRequired,
  handleLoadMoreFilmsClick: PropTypes.func.isRequired,
};

export {LoadMoreButton};
export default connect(mapStateToProps, null)(LoadMoreButton);
