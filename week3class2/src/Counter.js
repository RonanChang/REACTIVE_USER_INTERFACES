import React, { Component } from "react";

class Counter extends Component {
  render() {
    return <div>You have cliked {this.props.count} times. </div>;
  }
}

export default Counter;
