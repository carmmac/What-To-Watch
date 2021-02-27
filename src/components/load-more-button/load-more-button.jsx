import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';

const LoadMoreButton = (props) => {
  const {onLoadMoreFilmsClick} = props;
  return (
    <div className="catalog__more">
      <button
        className="catalog__button"
        type="button"
        onClick={() => onLoadMoreFilmsClick()}
      >Show more
      </button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  onLoadMoreFilmsClick() {
    dispatch(ActionCreator.loadMoreFilms());
  }
});

LoadMoreButton.propTypes = {
  onLoadMoreFilmsClick: PropTypes.func.isRequired,
};

export {LoadMoreButton};
export default connect(null, mapDispatchToProps)(LoadMoreButton);
