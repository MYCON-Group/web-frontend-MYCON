import React, { Component } from 'react';
import * as api from '../api.js'
import {Link } from 'react-router-dom';

class Events extends Component {

  state = {
    events: [],
  }

  render() {
    const { events } = this.state
    return (
      <ul>
        {events.map(event => {
          return <Link to={`/map/${event.events_id}`}><li key={event.events_id} >
            <div>{event.events_name}</div>
            <div>{event.events_start}</div>
            <div>{event.events_end}</div>
            <div>{event.events_description}</div>
            <div>{event.events_location}</div>
          </li></Link>
        })}
      </ul>
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
    console.log(`${events_id}`)
    api.getMapData(events_id)
  }
}

export default Events;