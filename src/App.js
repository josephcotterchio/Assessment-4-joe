import React, { Component } from "react";
import "./App.css";

class App extends Component {
    constructor() {
    super();
    this.state = {...this.getInitialState(), circleSelected: '1'};
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">UNIT 4 FINAL ASSESSMENT</header>

      </div>
    );
  }
}

export default App;
