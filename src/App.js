import React, { Component } from 'react';
import './App.css';
import NavFrame from './components/NavFrame';


class App extends Component {

  state = {
   
  }

  render() {
    return (
      <div className="App">
        <NavFrame />

        {/* <StallInfoDisplay rotate={this.rotate} selectedStall={positions[selected]} stallName={selected} /> */}
      </div>
    );
  }

  componentDidMount() {

  }
}

export default App;
