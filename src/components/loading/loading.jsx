import React from 'react';
import {loadingContainerStyles} from './loading-styles';

const Loading = () => {
  return (
    <div style={loadingContainerStyles}>
      <div className="lds-dual-ring"></div>
    </div>
  );
};

export default Loading;
