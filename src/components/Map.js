import React, { Component } from 'react';
import StallInfoDisplay from './StallInfoDisplay';
import SaveButton from './SaveButton';
import interact from 'interactjs';
import * as api from '../api.js'
import { isEmpty } from 'lodash';


class Map extends Component {
  state = {
    selected: '',
    positions: {}
  }
  render() {
    let { positions, selected } = this.state
    return (
      isEmpty(positions) ? null
        :

        <div>
          <div className="resize-container">
            {Object.values(positions).map((position) => {
              return (<div key={position.stall_id} className="resize-drag" onClick={this.handleMove}
                style={{
                  transform: `translate(${position.stall_x}px, ${position.stall_y}px) rotate(${position.stall_rotation}deg)`,
                  width: `${position.stall_width}px`, height: `${position.stall_height}px`
                }} id={position.stall_id} data-x={position.stall_x} data-y={position.stall_y}>
                {`ID: ${position.stall_id}`}
              </div>)
            })}


            {/*     <div className="resize-drag" onClick={this.handleMove} style={{ transform: `translate(${positions[1].stall_x}px, ${positions[1].stall_y}px) rotate(${positions[1].stall_rotation}deg)`, width: `${positions[1].stall_width}px`, height: `${positions[1].stall_height}px` }} id="1" data-x={positions[1].stall_x} data-y={positions[1].stall_y}>
          </div>
          <div className="resize-drag" onClick={this.handleMove} style={{ transform: `translate(${positions[2].stall_x}px, ${positions[2].stall_y}px) rotate(${positions[2].stall_rotation}deg)`, width: `${positions[2].stall_width}px`, height: `${positions[2].stall_height}px` }} id="2" data-x={positions[2].stall_x} data-y={positions[2].stall_y}>
          </div> */}
            <img src="http://denverconvention.com/uploads/content/Exhibit_Map.jpg" alt="" />

          </div>
         {/*  <StallInfoDisplay rotate={this.rotate} selectedStall={positions[selected]} stallName={selected} /> */}
          <SaveButton handleSave={this.handleSave} id={this.props.match.params.event_id} />
        </div>
    );
  }

  componentDidMount() {
    const { event_id } = this.props.match.params
    api.getMapData(event_id)
      .then((positions) => {
        this.setState({
          positions
        })
      })
  }

  componentDidUpdate(prevProps) {
    const { event_id } = this.props.match.params
    if (prevProps !== this.props) {
      api.getMapData(event_id)
        .then((positions) => {
          this.setState({
            positions
          })
        })
    }
  }

  handleSave = (id) => {
    const mapData = this.state.positions
    api.saveMapData(id, mapData)
  }



  rotate = (clockwise) => {
    let icon = this.state.selected
    const { positions } = this.state
    let newIconPos = { ...positions[icon], stall_rotation: clockwise ? positions[icon].stall_rotation + 10 : positions[icon].stall_rotation - 10 }
    let newPositions = { ...this.state.positions, [icon]: newIconPos }
    this.setState({
      positions: newPositions
    })
  }

  dragMoveListener = (event) => {
    var target = event.target;
    let icon = event.target.id
    let state = this.state
    let { stall_x, stall_y } = state.positions[icon]

    stall_x = (parseFloat(target.getAttribute('data-x')) || stall_x) + event.dx;
    stall_y = (parseFloat(target.getAttribute('data-y')) || stall_y) + event.dy;

    let newIconPos = { ...state.positions[icon], stall_x, stall_y }
    let newPositions = { ...state.positions, [icon]: newIconPos }
    this.setState({
      positions: newPositions
    })
  }

  resizeListener = (event) => {
    const icon = event.target.id;
    const { positions } = this.state;
    let newIconPos = { ...positions[icon], stall_width: event.rect.width, stall_height: event.rect.height }
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
