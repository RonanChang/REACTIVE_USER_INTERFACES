import React, { Component } from "react";

class Choice extends Component {
  constructor(props) {
    super(props);
    this.register = this.register.bind(this);
    this.isClicked = false;
  }
  register() {
    this.props.onClick(this.props.label);
  }
  render() {
    return <button onClick={this.register}>{this.props.label}</button>;
  }
}

export default Choice;
