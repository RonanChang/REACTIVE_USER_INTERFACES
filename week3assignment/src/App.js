import React, { Component } from "react";
import Choice from "./Choice.js";
import Screen from "./Screen.js";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clikedLabel: ""
    };
    this.register = this.register.bind(this);
  }
  register(label) {
    this.setState({
      clickedLabel: label
    });
  }

  render() {
    var labels = ["First Button", "Second Button", "Third Button"];
    var choices = [];
    var num_choices = 3;
    for (var i = 0; i < num_choices; i++) {
      choices.push(
        <Choice
          bgcolor={
            this.state.clickedLabel === labels[i] ? "rgb(27,173,172)" : "white"
          }
          textcolor={
            this.state.clickedLabel === labels[i]
              ? "white"
              : "rgb(48, 135, 134)"
          }
          label={labels[i]}
          onClick={this.register}
        />
      );
    }
    return (
      <div className="App">
        {choices}
        <Screen count={this.state.clickedLabel} />
      </div>
    );
  }
}

export default App;
