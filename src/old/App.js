import React, { Component } from "react";
import Display from "./Display";
import IncrementButton from "./IncrementButton";
import StatelessFC from "./StatelessFC";
import "./App.css";

class App extends Component {
  // constructor(props) holds inherited Component props and App's props
  // leaving (props) out of constructor() and super() is also fine
  constructor(props) {
    // super(props) gets all of Component's props and makes them App's own
    // also, can't touch "this" before you call super()
    super(props);
    // "this" is App, the caller of App.constructor()
    // this.state holds all mutable primitive values of App
    this.state = {
      count: 0
    };
  }

  // callback function passed to child IncrementButton
  handleCountChange = () => {
    // first, create a new var based on incremented state value
    const newCount = this.state.count + 1;
    // then use setState(), passing it an object with new state value
    // setState() both updates the state value AND
    // triggers React lifecycle to check virtual DOM and repaint updates
    this.setState({
      count: newCount
    });
  };

  handleClick = () => {
    const downCount = this.state.count - 1;
    this.setState({
      count: downCount
    });
  };

  render() {
    return (
      <main>
        {/* displays the current value of count on lifecycle update */}
        <Display countThings={this.state.count} />
        {/* App.handleCountChange() passed to button as a callback */}
        <IncrementButton incrementClick={this.handleCountChange} />
        <StatelessFC decrementClick={this.handleClick}/>
      </main>
    );
  }
}

export default App;
