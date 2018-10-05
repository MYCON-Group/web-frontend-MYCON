import React from 'react';
import classNames from 'classnames';
import { withStyles, AppBar, Toolbar, Typography, IconButton } from '@material-ui/core'
import { Route } from 'react-router-dom'
import MenuIcon from '@material-ui/icons/Menu';
import Map from './Map';
import DrawerPanel from './DrawerPanel';
import * as api from '../api.js'

export const MainContext = React.createContext();

class NavFrame extends React.Component {
  state = {
    open: false,
    events: [],
    eventSpaceHeight: 0
  };

  render() {
    const { classes } = this.props;
    const { open } = this.state;

    return (
      <MainContext.Provider value={{ state: this.state }}>
        <div className={classes.root}>
          <div className={classes.appFrame}>
            <AppBar
              className={classNames(classes.appBar, {
                [classes.appBarShift]: open,
                [classes[`appBarShift-left`]]: open,
              })}
            >
              <Toolbar disableGutters={!open}>
                <IconButton
                  color="inherit"
                  aria-label="Open drawer"
                  onClick={this.handleDrawerOpen}
                  className={classNames(classes.menuButton, open && classes.hide)}
                >
                  <MenuIcon />
                </IconButton>
                <div className={classes.title}>
                  <Typography variant="title" color="inherit" noWrap>
                    MYCON Venue Manager Workspace
              </Typography>
                </div>
              </Toolbar>
            </AppBar>
            <DrawerPanel open={open} handleDrawerClose={this.handleDrawerClose} />
            <main
              className={classNames(classes.content, classes[`content-left`], {
                [classes.contentShift]: open,
                [classes[`contentShift-left`]]: open,
              })}
            >
              <div className={classes.drawerHeader} />
              <div className={classes.map}><Route exact path="/map/:event_id" component={Map} /></div>
            </main>
          </div>
        </div>
      </MainContext.Provider>
    );
  }

  componentDidMount() {
    api.fetchEvents()
      .then((events) => {
        this.setState({
          events
        })
      })
  }

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

}

const drawerWidth = 340;
const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  appFrame: {
    zIndex: 2,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    width: '100%',
    color: 'white',
  },
  appBar: {
    position: 'absolute',
    zIndex: 2,
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
  menuButton: {
    marginLeft: 12,
    marginRight: 20,
  },
  hide: {
    display: 'none',
  },
  title: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    color: 'white',
    backgroundColor: 'white',
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },

  'content-left': {
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  'contentShift-left': {
    marginLeft: 0,
  },
});

export default withStyles(styles)(NavFrame);