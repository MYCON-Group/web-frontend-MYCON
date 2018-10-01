import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import interact from 'interactjs';

class App extends Component {

  state = {
    selected: '',
    positions: {
      icon1: {
        x: 0,
        y: 0,
        theta: 0
      }
    }
  }

  render() {
    let { x, y, theta } = this.state.positions.icon1
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div className="resize-container">
          <div className="resize-drag" onClick={this.selectIcon} onDrag={this.handleMove} style={{ transform: `translate(${x}px, ${y}px` }} id="icon1" data-x={x} data-y={y}>
            {/* <button className="rotate">R</button> */}
          </div>
          {/* <div className="resize-drag" onClick={this.selectIcon} onDrag={this.handleMove} id="icon2"></div> */}
          {/* <div className="resize-drag" onDrag={this.handleMove}></div>
          <div className="resize-drag" onDrag={this.handleMove}></div> */}
        </div>
        <button onClick={this.rotate}>rotate clockwise</button>
      </div>
    );
  }

  rotate = () => {
    let element = document.getElementById(this.state.selected)
    element.style.transform = "rotate(7deg)"
    console.log(element.textContent)
  }

  selectIcon = (event) => {
    this.setState({
      selected: event.target.id
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
    // translate the element
    // target.style.webkitTransform =
    //   target.style.transform =
    //   'translate(' + x + 'px, ' + y + 'px)';

    // // update the posiion attributes
    // target.setAttribute('data-x', x);
    // target.setAttribute('data-y', y);
    console.log(x, y)
    let newIconPos = { ...state.positions[icon], x, y }
    let newPositions = { ...state.positions, [icon]: newIconPos }
    this.setState({
      positions: newPositions
    })
  }

  handleMove = (event) => {
    // console.log(event.target)
    // event.target.style.position = 'absolute'


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
          min: { width: 50, height: 50 },
        },

        inertia: true,
      })
      .gesturable({
        onmove: function (event) {
          var box = event.target;
          let angle;
          angle += event.da;

          box.style.webkitTransform =
            box.style.transform =
            'rotate(' + angle + 'deg)';

          // document.getElementById('angle-info').textContent =
          //   angle.toFixed(2) + '&Acirc;&deg;';
        }
      })
      .on('resizemove', function (event) {
        var target = event.target,
          x = (parseFloat(target.getAttribute('data-x')) || 0),
          y = (parseFloat(target.getAttribute('data-y')) || 0);

        // update the element's style
        target.style.width = event.rect.width + 'px';
        target.style.height = event.rect.height + 'px';

        // translate when resizing from top or left edges
        x += event.deltaRect.left;
        y += event.deltaRect.top;

        target.style.webkitTransform = target.style.transform =
          'translate(' + x + 'px,' + y + 'px)';

        target.setAttribute('data-x', x);
        target.setAttribute('data-y', y);
        target.textContent = Math.round(event.rect.width) + '\u00D7' + Math.round(event.rect.height);
      });
  }

}

export default App;
