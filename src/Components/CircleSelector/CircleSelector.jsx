import React from "react";
import "./CircleSelector.css";

const CircleSelector = (props) => (
  <div className="CircleSelector">
    {props.circles.map((circles) => (
      <button className={circles === props.circleSelected ? "selected" : ""}
        key={circles}
        onClick={() => props.handleCircleClick("selected")}
      >
        SELECT CIRCLE {circles}
      </button>
    ))}
  </div>
);

export default CircleSelector;
