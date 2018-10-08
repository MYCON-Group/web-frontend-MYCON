import React from 'react';
import {Avatar, withStyles} from '@material-ui/core';

const styles = () => ({
})

const Stalls = ({ handleMove, position, classes }) => {
    return (
        <div className="resize-drag" onClick={() => handleMove(position.stall_id)}
            style={{
                transform: `translate(${position.stall_x}px, 
                    ${position.stall_y}px) 
                    rotate(${position.stall_rotation}deg)`,
                width: `${position.stall_width}px`,
                height: `${position.stall_height}px`
            }}
            id={position.stall_id}
            data-x={position.stall_x}
            data-y={position.stall_y}>
            <Avatar onClick={() => handleMove(position.stall_id)} alt={position.stall_name} src={position.stall_logo} disabled={true} className={classes.avatar}/>
        </div>
    );
}

export default withStyles(styles)(Stalls);