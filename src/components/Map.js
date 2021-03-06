import React, { Component } from 'react';
import SaveButton from './buttonComponents/SaveButton';
import CancelButton from './buttonComponents/CancelButton';
import interact from 'interactjs';
import * as api from '../api.js'
import { isEmpty } from 'lodash';
import RotateButtons from './buttonComponents/RotateButtons'
import AlterSizeButtons from './buttonComponents/AlterSizeButtons'
import Stalls from './Stalls';
import { Divider } from '@material-ui/core';
import SizeGuide from './SizeGuide';

class Map extends Component {
  state = {
    selected: '',
    positions: {},
    eventSpaceHeight: 500,
    saved: true
  }
  render() {
    let { positions, selected, saved } = this.state
    return (
      isEmpty(positions) ? null
        :
        <React.Fragment>
          <div className="resize-container">
            {Object.values(positions).map((position) => {
              return (
                <Stalls key={position.stall_id} position={position} handleMove={this.handleMove}
                  pWidth={this.props.location.state.width} />
              )
            })}
            <img src={this.props.location.state.image} alt="map" className="img" />
          </div>
          {positions[selected] && <SizeGuide selectedStall={positions[selected]} spaceWidth={this.props.location.state.actualWidth} pWidth={this.props.location.state.width} />}
          <Divider />
          <div className="button-panel">
            <AlterSizeButtons resize={this.resize} selectedStall={positions[selected]} stallName={selected} />
            <RotateButtons rotate={this.rotate} selectedStall={positions[selected]} stallName={selected} />
            <Divider />
            <SaveButton handleSave={this.handleSave} id={this.props.match.params.event_id} selectedStall={positions[selected]} savedFeedback={saved} />
            <CancelButton handleCancel={this.handleCancel} selectedStall={positions[selected]} />
          </div>
        </React.Fragment>
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

  handleVenueSize = (event) => {
    this.setState({
      eventSpaceHeight: event.target.value
    })
  }

  handleSave = (id) => {
    const mapData = this.state.positions
    api.saveMapData(id, mapData)
    .then((data) => {
      this.setState({
        saved: true
      })
    })  
  }

  handleCancel = () => {
    const { event_id } = this.props.match.params
    api.getMapData(event_id)
      .then((positions) => {
        this.setState({
          positions,
          saved: true
        })
      })
  }

  rotate = (clockwise) => {
    let icon = this.state.selected
    const { positions } = this.state
    let newIconPos = { ...positions[icon], stall_rotation: clockwise ? positions[icon].stall_rotation + 10 : positions[icon].stall_rotation - 10 }
    let newPositions = { ...this.state.positions, [icon]: newIconPos }
    this.setState({
      positions: newPositions,
      saved: false
    })
  }

  resize = (direction) => {
    let icon = this.state.selected
    const { positions } = this.state
    let newIconSize = {
      ...positions[icon],
      stall_height: direction ? positions[icon].stall_height * 1.1 : positions[icon].stall_height * (1 / 1.1),
      stall_width: direction ? positions[icon].stall_width * 1.1 : positions[icon].stall_width * (1 / 1.1)
    }
    let newPositions = { ...this.state.positions, [icon]: newIconSize }
    this.setState({
      positions: newPositions,
      saved: false
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
      positions: newPositions,
      saved: false
    })
  }

  resizeListener = (event) => {
    const icon = event.target.id;
    const { positions } = this.state;
    let newIconPos = { ...positions[icon], stall_width: event.rect.width, stall_height: event.rect.height }
    let newPositions = { ...positions, [icon]: newIconPos }
    this.setState({
      positions: newPositions,
      saved: false
    })
  }

  handleMove = (id) => {
    this.setState({
      selected: id
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
        edges: { left: true, right: true, bottom: true, top: true },

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
