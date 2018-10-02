import React, { Component } from 'react';
import './App.css';
import interact from 'interactjs';
import Map from './components/Map'
import NavBar from './components/NavBar'
import Events from './components/Events'
import { Route } from 'react-router-dom'

class App extends Component {

  state = {
   
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <Route exact path="/map/:event_id" render={() => <Map />} />
        <Route exact path="/events" render={() => <Events />} />
        {/* <StallInfoDisplay rotate={this.rotate} selectedStall={positions[selected]} stallName={selected} /> */}
      </div>
    );
  }

  

}

export default App;
