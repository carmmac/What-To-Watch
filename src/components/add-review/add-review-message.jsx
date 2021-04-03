import React from 'react';
import PropTypes from 'prop-types';
import {AddReviewMessageStyle} from './add-review-message-style';

const AddReviewMessage = ({status}) => {
  const renderMessage = () => {
    if (status === true) {
      return `Comment posted!`;
    }
    return `Something has gone wrong...`;
  };
  return (
    <div style={AddReviewMessageStyle}>
      {renderMessage()}
    </div>
  );
};

AddReviewMessage.propTypes = {
  status: PropTypes.bool.isRequired,
};

export default AddReviewMessage;
