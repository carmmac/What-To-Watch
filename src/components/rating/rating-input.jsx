import React, {memo} from 'react';
import PropTypes from 'prop-types';

const RatingInput = ({ratingScore, handleUserRatingChange, isChecked, isDisabled}) => {
  return <>
    <input
      className="rating__input"
      id={`star-${ratingScore}`}
      type="radio"
      name="rating"
      value={ratingScore}
      defaultChecked={isChecked}
      disabled={isDisabled}
      onChange={({target}) => {
        const value = parseInt(target.value, 10);
        handleUserRatingChange(value);
      }}
    />
    <label className="rating__label" htmlFor={`star-${ratingScore}`}>{`Rating ${ratingScore}`}</label>
  </>;
};

RatingInput.propTypes = {
  ratingScore: PropTypes.number.isRequired,
  handleUserRatingChange: PropTypes.func.isRequired,
  isChecked: PropTypes.bool.isRequired,
  isDisabled: PropTypes.bool.isRequired,
};

export default memo(RatingInput);
