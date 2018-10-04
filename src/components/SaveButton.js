import React from 'react';
import { Button, Snackbar, withStyles } from '@material-ui/core'
import SaveIcon from '@material-ui/icons/Save';

const styles = () => ({
    saveBar: {
        marginBottom: '8vh',
    },
    saveButton: {
        color: 'white',
        width: '80px',
    },
})

const SaveButton = ({handleSave, id, classes}) => {
    return (
        <div>
        <Snackbar anchorOrigin={{vertical:'bottom', horizontal:'right'}} open={true} className={classes.saveBar}>
        <Button className={classes.saveButton} color="primary" variant="contained" size="small" onClick={() => handleSave(id)}>
        <SaveIcon />
        Save
      </Button>
      </Snackbar>
         </div>
    )
}

export default withStyles(styles)(SaveButton);