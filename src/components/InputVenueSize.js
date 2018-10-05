import React, { Component } from 'react';
import SizeGuide from './SizeGuide';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    margin: {
      margin: theme.spacing.unit,
    },
    textField: {
      flexBasis: 200,
    },
    venueSizeInput: {
        display: 'block',
        marginTop: '3vh',
        justifyContent: 'left',
        right: 0
    },
  });

class InputVenueSize extends Component {
    state = {
        eventSpaceWidth: 100
    }

    render() {
        const {classes} = this.props
        return (
            <div className={classes.venueSizeInput}>
            <TextField
          id="outlined-simple-start-adornment"
          className={classNames(classes.margin, classes.textField)}
          variant="outlined"
          label="Enter venue length in metres"
          onChange={this.handleChange}
          InputProps={{
            startAdornment: <InputAdornment position="start">m</InputAdornment>,
          }}
        />
            <SizeGuide selectedStall={this.props.selectedStall} stallName={this.props.stallName} pWidth={this.props.pWidth} pHeight={this.props.pHeight} spaceWidth={this.state.eventSpaceWidth} />
        </div>
        )
    }

    handleChange = (event) => {
        this.setState({
            eventSpaceWidth: event.target.value
        })
    }
}

export default withStyles(styles)(InputVenueSize); 