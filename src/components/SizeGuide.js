import React, { Component } from 'react';
import {withStyles} from '@material-ui/core' 

const styles = theme => ({

})


class SizeGuide extends Component {
    render() {
        const { selectedStall, stallName, pHeight, spaceWidth } = this.props
        if (selectedStall && stallName) {
            let stallWidth = selectedStall.stall_width
            let stallHeight = selectedStall.stall_height
            let scale = (spaceWidth / pHeight)
            let lineMetersX = stallWidth * scale 
            let lineMetersY = stallHeight * scale 
            return (
                <React.Fragment>
                    Stall name:{stallName} &nbsp;
                    W:{lineMetersX.toFixed(2)}metres &nbsp;
                    H:{lineMetersY.toFixed(2)}metres &nbsp;
                </React.Fragment>
            )
         } else {
                return (
                    <React.Fragment>
                        Stall name: none selected &nbsp;
                    </React.Fragment>
                )
            }

        } 
    }

export default withStyles(styles)(SizeGuide); 