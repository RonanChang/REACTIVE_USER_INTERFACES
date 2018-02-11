import React, { Component } from "react";
import "./Screen.css";
class Screen extends Component {
  render() {
    return (
      <div className="Screen">
        <p>You have selected:{this.props.count}</p>
      </div>
    );
  }
}

export default Screen;
