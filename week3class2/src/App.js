import React, { Component } from "react";
import Button from "./Button.js";
import Counter from "./Counter.js";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    this.buttonWasCliked = this.buttonWasCliked.bind(this);
  }
  buttonWasCliked() {
    this.setState({
      count: this.state.count + 1
    });
  }
  render() {
    return (
      <div className="App">
        <Button onClick={this.buttonWasCliked} />
        <Counter count={this.state.count} />
      </div>
    );
  }
}

export default App;
