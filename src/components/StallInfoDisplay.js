import React from 'react';

const StallInfoDisplay = (props) => {

  const { rotate, selectedStall, stallName } = props
  return (
    stallName ? <div id="info-container">
      <div id="stall-name">{stallName}</div>
      <div id="height">{selectedStall.h}</div>
      <div id="width">{selectedStall.w}</div>
      <button onClick={() => rotate(true)}>rotate clockwise</button>
      <button onClick={() => rotate(false)}>rotate anti-clockwise</button>
    </div> : null
  );
};

export default StallInfoDisplay;