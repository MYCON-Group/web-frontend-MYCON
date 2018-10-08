import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Divider, withStyles } from '@material-ui/core'
import { MainContext } from './NavFrame';

const styles = () => ({
  menuItem: {
    textAlign: 'left',
    color: 'black',
    padding: '1rem 0',
    textDecoration: 'none',
    fontStyle: 'Montserrat',
    '&:hover': {
      background: 'grey',
      opcacity: '0.5'
    }
  }
})


class Events extends Component {
  render() {
    const { classes } = this.props
    return (
      <MainContext.Consumer>
        {(context) => (
          context.state.events.map(event => {
            return <Link key={event.events_id} to={{ pathname: `/map/${event.events_id}`, state: { image: event.events_img, height: event.events_map_height, width: event.events_map_width }}}>
              <div className={classes.menuItem} key={event.events_id} >
                <h5>{event.events_name}</h5>
                start: {event.events_start} end:{event.events_end}
                <div>{event.events_location}</div>
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