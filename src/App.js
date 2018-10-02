import React, { Component } from 'react';
import './App.css';
import Map from './components/Map'
import NavFrame from './components/NavFrame'
import { Route } from 'react-router-dom'

class App extends Component {

  state = {
   
  }

  render() {
    return (
      <div className="App">
        <NavFrame />
        <Route exact path="/map/:event_id" component={<Map />} />
        {/* <StallInfoDisplay rotate={this.rotate} selectedStall={positions[selected]} stallName={selected} /> */}
      </div>
    );
  }
}

export default App;
