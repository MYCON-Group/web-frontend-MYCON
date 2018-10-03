import React, { Component } from 'react';
import * as api from '../api.js'
import {Link } from 'react-router-dom';
import { Divider, withStyles } from '@material-ui/core'

const styles = () => ({
  menuItem: {
    alignItems: 'left',
    justifyContent: 'flex-start',
    color: 'black',
    padding: '1rem 0',
    textDecoration: 'none',
    '&:hover': {
      background: 'grey',
      opcacity: '0.5'
    }
  }
})


class Events extends Component {

  state = {
    events: [],
  }

  render() {
    const { events } = this.state
    const {classes } = this.props
    return (
   <div>
        {events.map(event => {
          return <Link key={event.events_id} to={{pathname:`/map/${event.events_id}`, state: { image: event.events_img}}}>
          <div className={classes.menuItem} key={event.events_id} >
            <h5>{event.events_name}</h5>
            start: {event.events_start} end:{event.events_end}
            <div>{event.events_location}</div>
          </div>
          <Divider />
          </Link>
        })}
      </div>
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
  handleClick = (events_id) => {
    api.getMapData(events_id)
  }
}

export default withStyles(styles)(Events);