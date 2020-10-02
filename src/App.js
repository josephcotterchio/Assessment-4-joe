import React, { Component } from "react";
import "./App.css";
import Circles from "./Components/Circles/Circles"

const circles = ['1', '2', '3', '4']

class App extends Component {
    constructor() {
    super();
    this.state = { circleSelected: '1'};
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">UNIT 4 FINAL ASSESSMENT</header>
        <main>
          <Circles
            circles={circles}
            handleButtonClick={this.handleButtonClick}
          />
        </main>
      </div>
    );
  }
}

export default App;
