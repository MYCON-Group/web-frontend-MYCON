import React from 'react';
import { Button, withStyles } from '@material-ui/core'
import SaveIcon from '@material-ui/icons/Save';

const styles = () => ({
    saveButton: {
        margin: '1rem 0'
    }
})
const SaveButton = ({ handleSave, id, classes, selectedStall, savedFeedback }) => {
    return (
        selectedStall ?  <div>
            <Button className={classes.saveButton} color={savedFeedback ? null : "secondary"} variant="fab" onClick={() => handleSave(id)}>
                <SaveIcon />
            </Button>
        </div> : null
    )
}

export default withStyles(styles)(SaveButton);