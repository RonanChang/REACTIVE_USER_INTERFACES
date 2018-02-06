import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    this.tick = this.tick.bind(this);
    setInterval(this.tick, 1000);
  }

  tick() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return <p> You have counted {this.state.count} times. </p>;
  }
}

export default Counter;
