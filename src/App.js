import "./styles.css";
import Canvas from "./Canvas";
import React, { Component } from "react";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddSeat = this.handleAddSeat.bind(this);
    this.state = {
      map: [
        { x: 40, y: 40, row: "A" },
        { x: 100, y: 100, row: "A" }
      ]
    };
  }

  handleAddSeat(data) {
    const map = this.state.map;
    map.push({ x: data[0], y: data[1], row: "A" });
    console.log("handle");
    console.log(map);
    this.setState({ map: map });
  }

  render() {
    return (
      <div className="App">
        <div className="Header"> Header </div>
        <div className="Toolbar">Toolbar </div>
        <div className="Canvas">
          <Canvas mapData={this.state.map} onAddSeat={this.handleAddSeat} />
        </div>
      </div>
    );
  }
}
