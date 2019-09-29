import React, { Component } from "react";
import "./Display.css";

class Display extends Component {
  render() {
    return (
      <section>
        <div>Number of thing Mongo learn about React:</div>
        {/* countThings defined as this.state.count in App */}
        <div>{this.props.countThings}</div>
      </section>
    );
  }
}

export default Display;
