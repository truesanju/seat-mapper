import React, { Component } from "react";
import { render } from "react-dom";
import { Stage, Layer, Star, Text, Rect, Circle } from "react-konva";

class Toolbar extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {}

  render() {
    return (
      <div>
        <button> Select </button>
        <button> Draw Seat</button>
        <button> Draw Row</button>
      </div>
    );
  }
}

export default Toolbar;
