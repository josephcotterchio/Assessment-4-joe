import React from "react";
import "./CircleSelector.css";

const CircleSelector = (props) => (
  <div className="CircleSelector">
    {props.circleSelector.map((circles) => (
      <div
        className={circles === props.circleSelector.selected ? "selected" : ""}
        key={circles}
      >
        {circles}
      </div>
    ))}
  </div>
);

export default CircleSelector;
