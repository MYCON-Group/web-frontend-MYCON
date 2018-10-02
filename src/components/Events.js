import React, { Component } from 'react';

class Events extends Component {

  state = {
    events: [{
      events_name: 'comicon',
      events_start: '20-12-2018',
      events_end: '21-12-2018',
      events_description: 'gathering of nerds',
      events_location: 'picadilly train station'
    }]
  }

  render() {
    const { events } = this.state
    return (
      <ul>
        {events.map(event => {
          return <li>
            <div>{event.events_name}</div>
            <div>{event.events_start}</div>
            <div>{event.events_end}</div>
            <div>{event.events_description}</div>
            <div>{event.events_location}</div>
          </li>
        })}
      </ul>
    );
  }
}

export default Events;