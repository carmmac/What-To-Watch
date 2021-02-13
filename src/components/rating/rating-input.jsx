import React from 'react';
import PropTypes from 'prop-types';

const RatingInput = (props) => {
  const {handleUserRatingChange} = props;
  return <>
    <input
      className="rating__input"
      id={`star-${props.ratingScore}`}
      type="radio"
      name="rating"
      value={props.ratingScore}
      onChange={({target}) => {
        const value = parseInt(target.value, 10);
        handleUserRatingChange(value);
      }}
    />
    <label className="rating__label" htmlFor={`star-${props.ratingScore}`}>{`Rating ${props.ratingScore}`}</label>
  </>;
};

RatingInput.propTypes = {
  ratingScore: PropTypes.number.isRequired,
  handleUserRatingChange: PropTypes.func.isRequired,
};

export default RatingInput;
