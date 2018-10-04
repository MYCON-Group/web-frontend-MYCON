import React from 'react';

const Stalls = ({handleMove, position}) => {
        const { stall_id, stall_x, stall_y, stall_rotation, stall_width, stall_height } = position
        return (
            <div className="resize-drag" onClick={handleMove}
                style={{
                    transform: `translate(${stall_x}px, ${stall_y}px) rotate(${stall_rotation}deg)`,
                    width: `${stall_width}px`, height: `${stall_height}px`
                }} id={stall_id} data-x={stall_x} data-y={stall_y}>
                {`ID: ${stall_id}`}
            </div>
        );
    }

export default Stalls;