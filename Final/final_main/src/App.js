import React, { Component } from "react";
import InputBox from "./InputBox.js";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.addInput = this.addInput.bind(this);
    this.state = {
      inputs: 1
    };
  }

  addInput() {}

  render() {
    return (
      <div className="App">
        <InputBox />
      </div>
    );
  }
}

export default App;
