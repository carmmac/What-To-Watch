import React from 'react';
import PropTypes from 'prop-types';
import {AddReviewMessageStyle} from './add-review-message-style';
import {RequestStatus} from '../../const';

const AddReviewMessage = ({requestStatus}) => {
  const getMessage = () => {
    if (requestStatus === RequestStatus.SUCCESS) {
      return `Comment posted!`;
    }
    return `Something has gone wrong...`;
  };
  return (
    <div style={AddReviewMessageStyle}>
      {getMessage()}
    </div>
  );
};

AddReviewMessage.propTypes = {
  requestStatus: PropTypes.string.isRequired,
};

export default AddReviewMessage;
