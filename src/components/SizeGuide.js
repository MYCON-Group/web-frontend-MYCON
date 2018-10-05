import React, { Component } from 'react'

class SizeGuide extends Component {
    render() {
        console.log(this.props)
        const { selectedStall, stallName, pHeight } = this.props
        if (selectedStall && stallName) {
            let stallWidth = selectedStall.stall_width
            let stallHeight = selectedStall.stall_height
            let scale = (this.props.spaceWidth / pHeight)
            let lineMetersX = stallWidth * scale
            let lineMetersY = stallHeight * scale
            return (
                <div className="size-guide">
                    <div id="stall-name">Stall name:{stallName}</div>
                    <div id="height">W:{lineMetersX.toFixed(2)}metres</div>
                    <div id="width">H:{lineMetersY.toFixed(2)}metres</div>
                </div>
            )
        } else {
            return null
        }
    }
}

export default SizeGuide; 