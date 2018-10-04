import React from 'react';

const StallInfoDisplay = ({ rotate, selectedStall, stallName }) => {
  return (
    stallName && selectedStall ? <div id="info-container" >
      <div id="stall-name">{stallName}</div>
      <div id="height">{selectedStall.stall_height}</div>
      <div id="width">{selectedStall.stall_width}</div>
      <button onClick={() => rotate(false)}><i className="fas fa-undo"></i></button>
      <button onClick={() => rotate(true)}><i className="fas fa-redo"></i></button>
    </div> : null
  );
};

export default StallInfoDisplay;