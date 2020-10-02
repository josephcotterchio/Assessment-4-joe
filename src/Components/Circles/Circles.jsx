import React from 'react';
import './Circles.css';

const Circles = (props) => (
  <div className="Circles">
    {props.circles.map((circles) => (
      <div
        className={circles === props.circles.selected ? "selected" : ""}
        key={circles}
      >
        {circles}
      </div>
    ))}
  </div>
);



export default Circles;
