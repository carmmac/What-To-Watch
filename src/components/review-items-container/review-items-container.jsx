import React from "react";
import PropTypes from 'prop-types';

const ReviewItemsContainer = (props) => {
  return (
    <div className="movie-card__reviews-col">
      {props.render()}
    </div>
  );
};

ReviewItemsContainer.propTypes = {
  render: PropTypes.func.isRequired,
};

export default ReviewItemsContainer;
