import React, { Component } from "react";
import "./Poster.css";
class Poster extends Component {
  render() {
    return (
      <div className="Poster">
        <h1>{this.props.name}</h1>
        <div>
          <p id="location">{this.props.location}</p>
          <p id="time">{this.props.time}</p>
        </div>
      </div>
    );
  }
}

export default Poster;
