import React, { Component } from "react";
import Rnd from "react-rnd";
import "./App.css";

const style = {
  backgroundColor: "grey"
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <Rnd
          style={style}
          default={{
            x: 0,
            y: 0,
            width: "300px",
            height: "auto"
          }}
        >
          <img draggable={false} src="/img.png" width="100%" height="100%" />
        </Rnd>
      </div>
    );
  }
}

export default App;
