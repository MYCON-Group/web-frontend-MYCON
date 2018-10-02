import React from 'react';

const StallInfoDisplay = (props) => {

  const { rotate, selectedStall, stallName } = props
  return (
    stallName ? <div id="info-container" >
      <div id="stall-name">{stallName}</div>
      <div id="height">{selectedStall.h}</div>
      <div id="width">{selectedStall.w}</div>
      <button onClick={() => rotate(false)}><i className="fas fa-undo"></i></button>
      <button onClick={() => rotate(true)}><i className="fas fa-redo"></i></button>
    </div> : null
  );
};

export default StallInfoDisplay;