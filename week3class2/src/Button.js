import React, { Component } from "react";
import "./Button.css";
class Button extends Component {
  constructor(props) {
    super(props);
    this.buttonWasCliked = this.buttonWasCliked.bind(this);
  }
  buttonWasCliked() {
    this.props.onClick();
  }
  render() {
    return <button onClick={this.buttonWasCliked}>Click me</button>;
  }
}

export default Button;
