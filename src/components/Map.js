import React from 'react';

const Map = (props) => {
  let { handleMove, positions } = props
  return (
    <div className="resize-container">
      <div className="resize-drag" onClick={handleMove} style={{ transform: `translate(${positions.icon1.x}px, ${positions.icon1.y}px) rotate(${positions.icon1.theta}deg)`, width: `${positions.icon1.w}px`, height: `${positions.icon1.h}px` }} id="icon1" data-x={positions.icon1.x} data-y={positions.icon1.y}>
      </div>
      <div className="resize-drag" onClick={handleMove} style={{ transform: `translate(${positions.icon2.x}px, ${positions.icon2.y}px) rotate(${positions.icon2.theta}deg)`, width: `${positions.icon2.w}px`, height: `${positions.icon2.h}px` }} id="icon2" data-x={positions.icon2.x} data-y={positions.icon2.y}>
      </div>
      <img src="http://denverconvention.com/uploads/content/Exhibit_Map.jpg" alt="" />
    </div>
  );
};

export default Map;
