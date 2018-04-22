import React, { Component } from "react";
import "./InputBox.css";

class InputBox extends Component {
  render() {
    return (
      <div className="InputBox" contentEditable="true">
        <p>Input here!!!</p>
      </div>
    );
  }
}

export default InputBox;
