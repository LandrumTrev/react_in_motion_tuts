import React, { Component } from "react";
import Display from "./Display";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Display message="G'day worldly mates!"/>
        {/* parent App renders an instance of Display child */}
        {/* parent App passes props.message data to Display child */}
        </div>
    );
  }
}

export default App;
