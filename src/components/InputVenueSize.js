import React from 'react';
import classNames from 'classnames';
import { withStyles, AppBar } from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import { MainContext } from './NavFrame';

const drawerWidth = 340;
const styles = theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
        width: '50vw',
        height: '1rem'
    },
    margin: {
      margin: theme.spacing.unit,
    },
    appBar: {
        position: 'absolute',
        marginTop: '8vh',
        transition: theme.transitions.create(['margin', 'width'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
      },
      appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['margin', 'width'], {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
      'appBarShift-left': {
        marginLeft: drawerWidth,
      },
  });

const InputVenueSize = ({classes, handleVenueSize}) => {
        return (
            <MainContext.Consumer>
           {(context) => (
                <AppBar className={classNames(classes.appBar, {
                    [classes.appBarShift]: context.state.open,
                    [classes[`appBarShift-left`]]: context.state.open,
                  })}>
            <textarea
              id="outlined-simple-start-adornment"
              className={classNames(classes.margin, classes.textField)}
              variant="outlined"
              placeholder="enter venue length in metres"
              onChange={handleVenueSize}
              InputProps={{
                startAdornment: <InputAdornment position="start">m</InputAdornment>,
              }}
            /> 
            </AppBar>
           )}
        </MainContext.Consumer>
        )
}

export default withStyles(styles)(InputVenueSize); 