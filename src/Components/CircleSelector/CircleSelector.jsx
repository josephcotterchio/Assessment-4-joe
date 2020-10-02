import React from "react";
import "./CircleSelector.css";

const CircleSelector = (props) => (
  <div className="CircleSelector">
    {props.circles.map((circle) => (
      <button className={circle === props.circleSelected ? "selected" : ""}
        key={circle}
        onClick={() => props.handleCircleClick("selected")}
      >
        SELECT CIRCLE {CircleSelector}
      </button>
    ))}
  </div>
);

export default CircleSelector;
