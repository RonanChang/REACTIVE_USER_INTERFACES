import React, { Component } from "react";

class Screen extends Component {
  render() {
    return <p>You have clicked: {this.props.count}</p>;
  }
}

export default Screen;
