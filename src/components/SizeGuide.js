import React, { Component } from 'react';
import { withStyles } from '@material-ui/core'

const styles = () => ({
    stallInfo: {
        position: 'fixed',
        top: '20vh',
        right: '0',
        color: 'black'
    }
})

class SizeGuide extends Component {
    render() {
        const { selectedStall, pHeight, spaceWidth, classes } = this.props
        let stallWidth = selectedStall.stall_width
        let stallHeight = selectedStall.stall_height
        let scale = (spaceWidth / pHeight)
        let lineMetersX = stallWidth * scale
        let lineMetersY = stallHeight * scale
        return (
            <div className={classes.stallInfo}>
                <div>Stall name: {selectedStall.stall_name} </div>
                <div>W: {lineMetersX.toFixed(2)}metres</div>
                <div>H: {lineMetersY.toFixed(2)}metres</div>
            </div>
        )
    }
}
export default withStyles(styles)(SizeGuide); 