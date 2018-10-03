import React from 'react';
import { Button } from '@material-ui/core'
import SaveIcon from '@material-ui/icons/Save';


const SaveButton = () => {
    return (
        <Button variant="contained" size="small">
        <SaveIcon />
        Save
      </Button>
    )

}

export default SaveButton;