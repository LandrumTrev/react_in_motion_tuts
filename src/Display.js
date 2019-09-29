import React, { Component } from "react";

class Display extends Component {
  render() {
    return (
      <section>
        {this.props.message}
        {/* in App.js: <Display message="G'day worldly mates!"/> */}
        {/* {this.object.property} syntax displays value of .message */}
        {/* "this" is the caller (the parent component) */}
      </section>
    );
  }
}

export default Display;
