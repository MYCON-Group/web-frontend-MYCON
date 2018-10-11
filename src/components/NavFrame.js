import React from 'react';
import classNames from 'classnames';
import { withStyles, AppBar, Toolbar, Typography, IconButton } from '@material-ui/core'
import { Route } from 'react-router-dom'
import MenuIcon from '@material-ui/icons/Menu';
import Map from './Map';
import DrawerPanel from './DrawerPanel';
import * as api from '../api.js'
import title from './eviivent_name.png'
import logo from './eviivent_logo.png'

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
                  color="#536DFE"
                  aria-label="Open drawer"
                  onClick={this.handleDrawerOpen}
                  className={classNames(classes.menuButton, open && classes.hide)}
                >
                  <MenuIcon />
                </IconButton>
                  <Typography align='center' className={classes.title} variant="title" color="black" noWrap>
             <img src={title} alt="eviivent title" className={classes.logoTitle} />
                    <img src={logo} alt="eviiventlogo" className={classes.logo} />
              </Typography>
              </Toolbar>
            </AppBar>
            <DrawerPanel open={open} handleDrawerClose={this.handleDrawerClose} />
            <main
              className={classNames(classes.content, classes[`content-left`], {
                [classes.contentShift]: open,
                [classes[`contentShift-left`]]: open,
              })}
              background="logo_transparent.png"
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

const drawerWidth = 320;
const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  logo: {
    height: '4rem',
  },
  logoTitle: {
    marginLeft: '18rem',
    height: '5rem',
    width: 'auto',
  },
  appFrame: {
    zIndex: 2,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    width: '100%',
    color: '#212121',
  },
  appBar: {
    position: 'absolute',
    display: 'block',
    backgroundColor: '#1976D2',
    textColor: '#212121',
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
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    color: '#212121',
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