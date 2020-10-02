import React from 'react';
import './Circles.css';

const Circles = (props) => (
  <div className="Circles">
    {props.circles.map((circle) => (
      <div
        className={circle === props.circleSelected ? "selected" : ""}
        key={circle}
      >
        {circle}
      </div>
    ))}
  </div>
);



export default Circles;
