import React, { Component } from "react";
import Input from "./Input";
import Poster from "./Poster";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.state = {
      label: "",
      name: "",
      time: "",
      location: ""
    };
  }
  onChange(label, text) {
    if (label === "Event name") {
      this.setState({ name: text });
    }
    if (label === "Time") {
      this.setState({ time: text });
    }
    if (label === "Location") {
      this.setState({ location: text });
    }
  }
  render() {
    return (
      <div className="App">
        <div className="InputBox">
          <Input label="Event name" onChange={this.onChange} />
          <Input label="Location" onChange={this.onChange} />
          <Input label="Time" onChange={this.onChange} />
        </div>
        <Poster
          name={this.state.name}
          location={this.state.location}
          time={this.state.time}
        />
      </div>
    );
  }
}

export default App;
