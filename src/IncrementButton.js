import React, { Component } from "react";

class IncrementButton extends Component {
  render() {
    return (
      // in JSX, button click handler "onclick" becomes "onClick"
      // incrementClick is a reference to App.handleCountChange()
      <button onClick={this.props.incrementClick}>
        Mongo learn thing!
      </button>
    );
  }
}

export default IncrementButton;
