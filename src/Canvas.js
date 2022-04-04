import React, { Component } from "react";
import { render } from "react-dom";
import { Stage, Layer, Star, Text, Rect, Circle } from "react-konva";

class Canvas extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const stage = e.target.getStage();
    const x = stage.getPointerPosition().x;
    const y = stage.getPointerPosition().y;
    this.props.onAddSeat([x, y]);
  }

  render() {
    return (
      <div>
        <Stage width={800} height={800} onMouseDown={this.handleClick}>
          <Layer>
            <Rect width={800} height={800} fill={"white"} />
            {console.log(this.props.mapData)}
            {this.props.mapData.map((section) =>
              section.rows.map((row) =>
                row.seats.map((seat) => (
                  <Circle
                    x={seat.x}
                    y={seat.y}
                    radius={20}
                    fill={"lightblue"}
                  />
                ))
              )
            )}
          </Layer>
        </Stage>
      </div>
    );
  }
}

export default Canvas;
