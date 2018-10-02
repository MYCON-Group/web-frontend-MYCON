import React, { Component } from 'react';
import './App.css';
import interact from 'interactjs';
import Map from './components/Map'
import StallInfoDisplay from './components/StallInfoDisplay';

class App extends Component {

  state = {
    selected: '',
    positions: {
      icon1: {
        x: 0,
        y: 0,
        theta: 0
      },
      icon2: {
        x: 0,
        y: 0,
        theta: 0
      }
    }
  }

  render() {
    let { positions } = this.state
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Map handleMove={this.handleMove} positions={this.state.positions} />
        <StallInfoDisplay rotate={this.rotate} />
      </div>
    );
  }

  rotate = () => {
    let icon = this.state.selected
    const { positions } = this.state
    let newIconPos = { ...positions[icon], theta: positions[icon].theta + 10 }
    let newPositions = { ...this.state.positions, [icon]: newIconPos }
    this.setState({
      positions: newPositions
    })
  }

  dragMoveListener = (event) => {
    var target = event.target;
    let icon = event.target.id
    let state = this.state
    let { x, y, theta } = state.positions[icon]
    // keep the dragged position in the data-x/data-y attributes
    x = (parseFloat(target.getAttribute('data-x')) || x) + event.dx;
    y = (parseFloat(target.getAttribute('data-y')) || y) + event.dy;

    let newIconPos = { ...state.positions[icon], x, y }
    let newPositions = { ...state.positions, [icon]: newIconPos }
    this.setState({
      positions: newPositions
    })
  }

  handleMove = (event) => {
    this.setState({
      selected: event.target.id
    })
    interact(".resize-drag")
      .draggable({
        onmove: this.dragMoveListener,
        restrict: {
          restriction: 'parent',
          elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
        },
      })
      .resizable({
        // resize from all edges and corners
        edges: { left: false, right: true, bottom: true, top: false },

        // keep the edges inside the parent
        restrictEdges: {
          outer: 'parent',
          endOnly: true,
        },

        // minimum size
        restrictSize: {
          min: { width: 5, height: 5 },
        },

        inertia: true,
      })
      .on('resizemove', function (event) {
        var target = event.target

        target.style.width = event.rect.width + 'px';
        target.style.height = event.rect.height + 'px';
        // target.textContent = Math.round(event.rect.width) + '\u00D7' + Math.round(event.rect.height);
      });
  }

}

export default App;
