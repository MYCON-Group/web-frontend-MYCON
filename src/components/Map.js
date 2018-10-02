import React, { Component } from 'react';
import StallInfoDisplay from './StallInfoDisplay';
import interact from 'interactjs';

class Map extends Component {
  state = {
    selected: '',
    positions: {
      icon1: {
        x: 0,
        y: 0,
        theta: 0,
        h: 25,
        w: 25
      },
      icon2: {
        x: 0,
        y: 0,
        theta: 0,
        h: 25,
        w: 25
      }
    }
  }
  render() {
    let { positions, selected } = this.state
    return (
      <div>
        <div className="resize-container">
          <div className="resize-drag" onClick={this.handleMove} style={{ transform: `translate(${positions.icon1.x}px, ${positions.icon1.y}px) rotate(${positions.icon1.theta}deg)`, width: `${positions.icon1.w}px`, height: `${positions.icon1.h}px` }} id="icon1" data-x={positions.icon1.x} data-y={positions.icon1.y}>
          </div>
          <div className="resize-drag" onClick={this.handleMove} style={{ transform: `translate(${positions.icon2.x}px, ${positions.icon2.y}px) rotate(${positions.icon2.theta}deg)`, width: `${positions.icon2.w}px`, height: `${positions.icon2.h}px` }} id="icon2" data-x={positions.icon2.x} data-y={positions.icon2.y}>
          </div>
          <img src="http://denverconvention.com/uploads/content/Exhibit_Map.jpg" alt="" />

        </div>
        <StallInfoDisplay rotate={this.rotate} selectedStall={positions[selected]} stallName={selected} />
      </div>
    );
  }



  rotate = (clockwise) => {
    let icon = this.state.selected
    const { positions } = this.state
    let newIconPos = { ...positions[icon], theta: clockwise ? positions[icon].theta + 10 : positions[icon].theta - 10 }
    let newPositions = { ...this.state.positions, [icon]: newIconPos }
    this.setState({
      positions: newPositions
    })
  }

  dragMoveListener = (event) => {
    var target = event.target;
    let icon = event.target.id
    let state = this.state
    let { x, y } = state.positions[icon]

    x = (parseFloat(target.getAttribute('data-x')) || x) + event.dx;
    y = (parseFloat(target.getAttribute('data-y')) || y) + event.dy;

    let newIconPos = { ...state.positions[icon], x, y }
    let newPositions = { ...state.positions, [icon]: newIconPos }
    this.setState({
      positions: newPositions
    })
  }

  resizeListener = (event) => {
    const icon = event.target.id;
    const { positions } = this.state;
    let newIconPos = { ...positions[icon], w: event.rect.width, h: event.rect.height }
    let newPositions = { ...positions, [icon]: newIconPos }
    this.setState({
      positions: newPositions
    })
    // target.textContent = Math.round(event.rect.width) + '\u00D7' + Math.round(event.rect.height);
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
      .on('resizemove', this.resizeListener);
  }
}

export default Map;
