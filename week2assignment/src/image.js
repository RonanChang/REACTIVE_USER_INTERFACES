import React, { Component } from "react";
import "./image.css";

class Image extends Component {
  render() {
    return (
      <div className="Image">
        <img src={this.props.src} alt="Image not found." />
      </div>
    );
  }
}

export default Image;
