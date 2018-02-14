import React, { Component } from "react";
import Temperature from "./Temperature";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.state = {
      scale: "C",
      value: 30
    };
  }
  onChange(temp, scale) {
    this.setState({
      scale: scale,
      value: temp
    });
  }

  toC(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
  }

  toF(celsius) {
    return celsius * 9 / 5 + 32;
  }

  render() {
    const celsius =
      this.state.scale === "C" ? this.state.value : this.toC(this.state.value);
    const fahrenheit =
      this.state.scale === "F" ? this.state.value : this.toF(this.state.value);
    return (
      <div className="App">
        <Temperature scale="C" onChange={this.onChange} value={celsius} />
        <Temperature scale="F" onChange={this.onChange} value={fahrenheit} />
      </div>
    );
  }
}

export default App;
