import React, { Component } from "react";
import "./App.css";
import P5Wrapper from "react-p5-wrapper";

class App extends Component {
  render() {
    return (
      <div className="App">
        This is where my canvas will be!
        <P5Wrapper sketch={sketch} />
      </div>
    );
  }
}
export function sketch(p) {
  let rotation = 0;

  p.setup = function() {
    p.createCanvas(600, 400);
    p.background(0);
  };

  p.myCustomRedrawAccordingToNewPropsHandler = function(props) {
    if (props.rotation) {
      rotation = props.rotation * Math.PI / 180;
    }
  };

  p.draw = function() {
    p.noStroke();
    p.push();

    p.ellipse(p.width / 2, p.height / 2, 100, 100);
    p.pop();
  };
}

export default App;
