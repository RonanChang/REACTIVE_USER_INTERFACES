import React, { Component } from "react";
import "./Button.css";

class Button extends Component {
  constructor(props) {
    super(props);
    this.clicked = this.clicked.bind(this);
    this.reset = this.reset.bind(this);
    this.state = {
      animation: false
    };
  }
  clicked() {
    console.log("Clicked");
    this.setState({
      animation: true
    });
  }
  reset() {
    this.setState({
      animation: false
    });
  }
  render() {
    const classes = this.state.animation ? "Button Animation" : "Button";
    return (
      <button
        className={classes}
        type="button"
        onClick={this.clicked}
        onAnimationEnd={this.reset}
      >
        {this.props.children}
      </button>
    );
  }
}

export default Button;
