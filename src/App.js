import React, { Component } from "react";
import "./App.css";
import Circles from "./Components/Circles/Circles"
import CircleSelector from "./Components/CircleSelector/CircleSelector";

const Profile = ['1', '2', '3', '4']

//const to identify unchanging numbers

class App extends Component {
  constructor() {
    super();
    this.state = { circleSelected: 'Following' };
  }
  handleCircleClick = (circle) => {
    this.setState( {circleSelected: circle});
  };
  handlecircleSelected = (circleSelected) => {
    this.setState( {circleSelected: circleSelected})
  };

  //state neeeded to separate the changing state of buttons

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
///rendering the changes to the circles based on click
export default App;
