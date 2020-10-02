import React, { Component } from "react";
import "./App.css";
import Circles from "./Components/Circles/Circles"
import CircleSelector from "./Components/CircleSelector/CircleSelector";

const circles = ['1', '2', '3', '4']

class App extends Component {
  constructor() {
    super();
    this.state = { circleSelected: "1" };
  }
  handleCircleClick = (circle) => {
    this.setState( {circleSelected: circle});
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">UNIT 4 FINAL ASSESSMENT</header>
        <main>          
        <CircleSelector
            circles={circles}
            circleSelected={this.state.circleSelected}
            handleCircleClick={this.handleCircleClick}
          />
          <Circles
            circles={circles}
            circleSelected={this.state.circleSelected}
          />
        </main>
      </div>
    );
  }
}

export default App;
