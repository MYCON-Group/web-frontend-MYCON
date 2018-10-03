import React from 'react';
import { Button, Snackbar, withStyles } from '@material-ui/core'
import Backspace from '@material-ui/icons/Backspace'

const styles = theme => ({
    cancelBar: {
        marginBottom: '2vh',

    },
    cancelButton: {
        color: 'black',
        width: '80px'
    }
})

const CancelButton = ({handleCancel, id, classes}) => {
    return (
        <Snackbar anchorOrigin={{vertical:'bottom', horizontal:'right'}} open={true} className={classes.cancelBar}>
        <Button className={classes.cancelButton} color="secondary" variant="contained" size="small" onClick={handleCancel}>
        <Backspace />
        Cancel
      </Button>
      </Snackbar>
    )
}

export default withStyles(styles)(CancelButton);