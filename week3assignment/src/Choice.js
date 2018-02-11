import React, { Component } from "react";
import "./Choice.css";
class Choice extends Component {
  constructor(props) {
    super(props);
    this.register = this.register.bind(this);
  }
  register() {
    this.props.onClick(this.props.label);
  }

  render() {
    var buttonStyle = {
      backgroundColor: this.props.bgcolor,
      color: this.props.textcolor
    };
    return (
      <button onClick={this.register} style={buttonStyle}>
        <div className="label">{this.props.label}</div>
      </button>
    );
  }
}

export default Choice;
