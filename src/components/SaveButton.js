import React from 'react';
import { Button, Snackbar, withStyles } from '@material-ui/core'
import SaveIcon from '@material-ui/icons/Save';

const styles = theme => ({
    saveBar: {
        margin: '2vh'
    },
    saveButton: {
        color: 'black'
    }
})

const SaveButton = ({handleSave, id, classes}) => {
    return (
        <Snackbar anchorOrigin={{vertical:'bottom', horizontal:'right'}} open={true} onClose={this.handleClose} className={classes.saveBar}>
        
        <Button className={classes.saveButton} color="secondary" variant="contained" size="small" onClick={() => handleSave(id)}>
        <SaveIcon />
        Save
      </Button>
      </Snackbar>
    )
}

export default withStyles(styles)(SaveButton);