import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Divider, withStyles } from '@material-ui/core'
import { MainContext } from './NavFrame';
import classNames from 'classnames'
import {LocationOn, DateRange } from '@material-ui/icons'

const styles = () => ({
  menuItem: {
    textAlign: 'left',
    color: 'black',
    padding: '1rem 0',
    textDecoration: 'none',
    '&:hover': {
      background: '#BBDEFB',
      opcacity: '0.5',
      textDecoration: 'none'
    }
  },
  info: {
    fontSize: '14px',
    verticalAlign: 'middle',
    marginBotton: '0.3rem'
  },
  text: {
    marginLeft: '1rem',
  },
  icon: {
    verticalAlign: 'middle',
    marginRight: '1rem',
  },
  dateRange: {
    color: 'red'
  },
  location: {
    color: 'black'
  }
})


class Events extends Component {
  render() {
    const { classes } = this.props
    return (
      <MainContext.Consumer>
        {(context) => (
          context.state.events.map(event => {
            return <Link key={event.events_id} to={{ pathname: `/map/${event.events_id}`, state: { image: event.events_img, width: event.events_map_width, actualWidth: event.events_width }}}>
              <div className={classes.menuItem} key={event.events_id} >
              <div className={classes.text}>
                <h6><strong>{event.events_name}</strong></h6>
                <div className={classes.info}><DateRange fontSize="small" className={classNames(classes.icon, classes.dateRange)}/>{event.events_start} / {event.events_end}</div>
                <div className={classes.info}><LocationOn fontSize="small" className={classNames(classes.icon, classes.location)} />{event.events_location}</div>
                </div>
              </div>
              <Divider />
            </Link>
          })
        )
        }
      </MainContext.Consumer>
    );
  }
}

export default withStyles(styles)(Events);