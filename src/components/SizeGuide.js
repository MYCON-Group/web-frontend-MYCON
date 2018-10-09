import React, { Component } from 'react';
import { withStyles, Paper } from '@material-ui/core'

const styles = () => ({
    stallInfo: {
        position: 'fixed',
        top: '15vh',
        right: '0',
        color: 'black',
        padding:  '1rem',
        margin: '1rem'
    }
})

class SizeGuide extends Component {
    render() {
        const { selectedStall, pWidth, spaceWidth, classes } = this.props
        console.log(pWidth)
        let stallWidth = selectedStall.stall_width
        let stallHeight = selectedStall.stall_height
        let scale = (spaceWidth / pWidth)
        let lineMetersX = stallWidth * scale
        let lineMetersY = stallHeight * scale
        return (
            <Paper className={classes.stallInfo} elevation={1}>
                <div><strong>{selectedStall.stall_name}</strong></div>
                <div>W: {lineMetersX.toFixed(2)}m</div>
                <div>H: {lineMetersY.toFixed(2)}m</div>
            </Paper>
        )
    }
}
export default withStyles(styles)(SizeGuide); 