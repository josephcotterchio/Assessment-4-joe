import React from "react";
import "./CircleSelector.css";

const CircleSelector = (props) => (
  <div className="CircleSelector">
    {props.circles.map((circle) => (
      <button className={circle === props.circleSelected ? "selected" : ""}
        key={circle}
        onClick={() => props.handleCircleClick(circle)}
      >
        SELECT CIRCLE {circle}
      </button>
    ))}
  </div>
);

export default CircleSelector;
