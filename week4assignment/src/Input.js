import React, { Component } from "react";
import "./Input.css";
class Input extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }
  onChange(e) {
    this.props.onChange(this.props.label, e.target.value);
  }
  render() {
    return (
      <div className="Input">
        <p>{this.props.label} </p>
        <input type="text" onChange={this.onChange} />
      </div>
    );
  }
}

export default Input;
