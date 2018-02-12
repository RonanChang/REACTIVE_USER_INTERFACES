import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    const labels = ["paragraph 1", "paragraph 2", "paragraph 3"];
    const paragraphs = labels.map(label => {
      return <p>{label}</p>;
    });
    return <div className="App">{paragraphs}</div>;
  }
}

export default App;
