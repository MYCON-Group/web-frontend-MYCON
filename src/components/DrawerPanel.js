import React from 'react';
import {Drawer, Divider, List, withStyles, IconButton} from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

const drawerWidth = 340;

const styles = (theme) => ({
    drawerPaper: {
        position: 'relative',
        width: drawerWidth,
      },
      drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
      },
})

const DrawerPanel = ({open, handleDrawerClose, classes}) => {
    return (
        <Drawer
    variant="persistent"
    open={open}
    classes={{
      paper: classes.drawerPaper,
    }}
  >
    <div className={classes.drawerHeader}>
      <IconButton onClick={handleDrawerClose}>
        {open === false ? <ChevronRightIcon /> : <ChevronLeftIcon />}
      </IconButton>
    </div>
    <Divider />
    <List>{'!!!'}</List>
    <Divider />
    <List>{'!!!'}</List>
  </Drawer>
    )
    
}


export default withStyles(styles)(DrawerPanel);