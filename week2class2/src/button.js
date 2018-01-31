import React, { Component } from "react";
import "./button.css";

class Button extends Component {
  constructor() {
    super();
    this.state = { show: false };
  }
  render() {
    //whenever setState() is called, render is re-called,
    //therefore we need to put the things that will change here
    if (this.state.show) {
      this.text = "TA-DA!!!";
    } else {
      this.text = null;
    }

    return (
      <div className="Button">
        <button type="button" onClick={() => this.setState({ show: true })}>
          Click me
        </button>
        <p>{this.text}</p>
      </div>
    );
  }
}

export default Button;
