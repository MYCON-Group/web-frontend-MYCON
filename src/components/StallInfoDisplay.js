import React from 'react';

const StallInfoDisplay = (props) => {

  const { rotate, positions } = props
  return (
    <div id="info-container">
      <div id="height"></div>
      <div id="width"></div>
      <button onClick={() => rotate(true)}>rotate clockwise</button>
      <button onClick={() => rotate(false)}>rotate anti-clockwise</button>
    </div>
  );
};

export default StallInfoDisplay;