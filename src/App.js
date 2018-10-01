import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import interact from 'interactjs';

class App extends Component {
  render() {
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
          <div className="resize-drag" onDrag={this.handleMove} id="find"></div>
          <div className="resize-drag" onDrag={this.handleMove}></div>
          <div className="resize-drag" onDrag={this.handleMove}></div>
          <div className="resize-drag" onDrag={this.handleMove}></div>
        </div>
      </div>
    );
  }

  handleMove = (event) => {
    // console.log(event.target)
    // event.target.style.position = 'absolute'
    function dragMoveListener(event) {
      var target = event.target,
        // keep the dragged position in the data-x/data-y attributes
        x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
        y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;
      // translate the element
      target.style.webkitTransform =
        target.style.transform =
        'translate(' + x + 'px, ' + y + 'px)';

      // update the posiion attributes
      target.setAttribute('data-x', x);
      target.setAttribute('data-y', y);
    }

    interact(".resize-drag")
      .draggable({
        onmove: dragMoveListener,
        restrict: {
          restriction: 'parent',
          elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
        },
      })
      .resizable({
        // resize from all edges and corners
        edges: { left: true, right: true, bottom: true, top: true },

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
