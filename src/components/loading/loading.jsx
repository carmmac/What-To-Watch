import React from 'react';

const Loading = () => {
  return (
    <div style={{width: `100%`, height: `25vh`, position: `relative`}}>
      <div className="lds-dual-ring"></div>
    </div>
  );
};

export default Loading;
