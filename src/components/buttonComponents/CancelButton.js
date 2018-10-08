import React from 'react';
import { Button, withStyles } from '@material-ui/core'
import Backspace from '@material-ui/icons/Backspace'

const styles = () => ({
    cancelButton: {
        marginBottom: '1rem'
    }
})

const CancelButton = ({handleCancel, classes, selectedStall}) => {
    return (
        selectedStall ? <div>
        <Button className={classes.cancelButton} color="secondary" variant="fab" onClick={handleCancel}>
        <Backspace />
      </Button>
      </div> : null
    )
}

export default withStyles(styles)(CancelButton);