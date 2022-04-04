import "./styles.css";
import Canvas from "./Canvas";
import Toolbar from "./Toolbar";
import React, { Component } from "react";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddSeat = this.handleAddSeat.bind(this);
    this.state = {
      map: [
        {
          sectionName: "Main",
          sectionId: "00",
          rows: [
            {
              rowName: "A",
              rowId: "01",
              seats: [
                { id: "02", number: 13, x: 40, y: 60 },
                { id: "02", number: 14, x: 60, y: 40}
              ]
            }
          ]
        }
      ]

      //     seats:{{ x: 40, y: 40, row: "A" }}
    };
  }

  handleAddSeat(data) {
    const map = this.state.map;
    map.[0].rows[0].seats.push(
      { id: "02", number: 13, x: data[0], y: data[1] })

    this.setState({ map: map });
  }

  render() {
    return (
      <div className="App">
        <div className="Header"> Header </div>
        <div className="Toolbar">
          {" "}
          <Toolbar />{" "}
        </div>
        <div className="Canvas">
          <Canvas mapData={this.state.map} onAddSeat={this.handleAddSeat} />
        </div>
      </div>
    );
  }
}
