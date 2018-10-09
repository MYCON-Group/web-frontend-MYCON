import React from 'react';
import { Drawer, Divider, withStyles, IconButton, Typography } from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import PropTypes from 'prop-types';
import Events from './Events';

const drawerWidth = 320;

const styles = (theme) => ({
  drawerPaper: {
    position: 'relative',
    width: drawerWidth,
    backgroundColor: '#2196F3',
    textColor: '#212121'
  },
  drawerButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    textColor: '#212121',
    ...theme.mixins.toolbar,
  },
  title: {
    marginRight: '5rem',
    color: '#212121'
  }
})

const DrawerPanel = ({ open, handleDrawerClose, classes }) => {
  return (
    <Drawer
      variant="persistent"
      open={open}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <div className={classes.drawerButton}>
        <Typography className={classes.title} variant="title">Your Events</Typography>
        <IconButton color="#536DFE" onClick={handleDrawerClose}>
          {open === false ? <ChevronRightIcon /> : <ChevronLeftIcon />}
        </IconButton>
      </div>
      <Divider />
      <Events />
      <Divider />
    </Drawer>
  )
}

export default withStyles(styles)(DrawerPanel);

DrawerPanel.propTypes = {
  open: PropTypes.bool.isRequired,
  handleDrawerClose: PropTypes.func.isRequired
}