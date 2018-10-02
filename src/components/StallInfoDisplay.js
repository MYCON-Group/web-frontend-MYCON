import React from 'react';

const StallInfoDisplay = (props) => {

  const { rotate } = props
  return (
    <div id="info-container">
      <div id="height"></div>
      <div id="width"></div>
      <button onClick={rotate}>rotate clockwise</button>
    </div>
  );
};

export default StallInfoDisplay;