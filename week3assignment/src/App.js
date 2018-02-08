import React, { Component } from "react";
import Choice from "./Choice.js";
import Screen from "./Screen.js";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      label_1: "Choice 1",
      label_2: "Choice 2",
      show: ""
    };
    this.register = this.register.bind(this);
  }
  register(l) {
    this.setState({
      show: l
    });
  }
  render() {
    return (
      <div className="App">
        <Choice label={this.state.label_1} onClick={this.register} />
        <Choice label={this.state.label_2} onClick={this.register} />
        <Screen count={this.state.show} />
      </div>
    );
  }
}

export default App;
