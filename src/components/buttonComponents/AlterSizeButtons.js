import React from 'react';
import { Button, withStyles } from '@material-ui/core'
import { Fullscreen, FullscreenExit } from '@material-ui/icons'

const styles = () => ({
    resizeButton: {
        marginBottom: '1rem'
    }
})

const AlterSizeButtons = ({ resize, selectedStall, stallName, classes }) => {
    return (
        stallName && selectedStall ? <div id="info-container" >
            <div>
                <Button variant="fab" className={classes.resizeButton} onClick={() => resize(true)}><Fullscreen /></Button>
            </div>
            <div>
                <Button variant="fab" className={classes.resizeButton} onClick={() => resize(false)}><FullscreenExit /></Button>
            </div>
        </div> : null
    );
}

export default withStyles(styles)(AlterSizeButtons);