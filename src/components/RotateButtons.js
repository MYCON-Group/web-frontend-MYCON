import React from 'react';
import { Button, withStyles } from '@material-ui/core'
import {RotateRight, RotateLeft} from '@material-ui/icons'

const styles  = theme => ({
  rotateButton: {
    marginBottom: '1rem'
  }
})


const RotateButtons = ({ rotate, selectedStall, stallName, classes }) => {
  return (
    stallName && selectedStall ? <div id="info-container" >
      {/* <div id="stall-name">{stallName}</div>
      <div id="height">{selectedStall.stall_height}</div>
      <div id="width">{selectedStall.stall_width}</div> */}
      <div>
        <Button variant="fab" className={classes.rotateButton} onClick={() => rotate(false)}><RotateLeft /></Button>
        </div>
        <div>
        <Button variant="fab" className={classes.rotateButton} onClick={() => rotate(true)}><RotateRight /></Button>
        </div>
    </div> : null

  );
};

export default withStyles(styles)(RotateButtons);