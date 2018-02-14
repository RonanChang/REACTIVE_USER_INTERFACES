import React, { Component } from "react";
import "./Input.css";

class Input extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.state = {
      value: ""
    };
  }

  onChange(e) {
    let txt = e.target.value;
    txt = txt
      .replace("Ronan", "[beep]")
      .replace("ronan", "[beep]")
      .replace("RONAN", "[beep]");

    this.setState({
      value: txt
    });

    console.log(txt);
  }
  render() {
    return (
      <input type="text" onChange={this.onChange} value={this.state.value} />
    );
  }
}

export default Input;
