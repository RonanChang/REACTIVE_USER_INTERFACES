import React, { Component } from "react";
import Content from "./content.js";
import Button from "./button.js";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Content myText="Hello" />
        <Content myText="From the" />
        <Content myText="Other Side" />
        <Button />
      </div>
    );
  }
}

export default App;
