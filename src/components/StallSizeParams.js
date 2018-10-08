import React from 'react';
import classNames from 'classnames';
import { withStyles, AppBar } from '@material-ui/core';
import { MainContext } from './NavFrame';
import SizeGuide from './SizeGuide';

const drawerWidth = 340;
const styles = theme => ({
  textField: {
    justifyContent: 'flex-end',
    height: '1rem',
    fontSize: '10px',
    width: '25vw',
    verticalAlign: 'middle',
  },
  venueSizeGroup: {
    justifyContent: 'flex-end'
  },
  margin: {
    margin: theme.spacing.unit,
  },
  appBar: {
    position: 'absolute',
    marginTop: '8vh',
    backgroundColor: 'grey',
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

const StallSizeParams = ({ classes, handleVenueSize, stallName, spaceWidth, pHeight, selectedStall }) => {
  return (
    <MainContext.Consumer>
      {(context) => (
        <AppBar className={classNames(classes.appBar, {
          [classes.appBarShift]: context.state.open,
          [classes[`appBarShift-left`]]: context.state.open,
        })}>
          <div className={classes.venueSizeGroup}>
            Enter Venue size:
            <textarea
              id="venue size input"
              className={classNames(classes.margin, classes.textField)}
              variant="outlined"
              placeholder="length in metres"
              onChange={handleVenueSize}
            />
            <SizeGuide selectedStall={selectedStall} stallName={stallName} spaceWidth={spaceWidth} pHeight={pHeight} />
          </div>
        </AppBar>
      )}
    </MainContext.Consumer>
  )
}

export default withStyles(styles)(StallSizeParams);