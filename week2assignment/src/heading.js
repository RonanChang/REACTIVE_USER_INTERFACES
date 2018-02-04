import React, { Component } from "react";
import "./heading.css";

class Heading extends Component {
  render() {
    return (
      <div className="Heading">
        <a href={this.props.link}>{this.props.title}</a>
      </div>
    );
  }
}

export default Heading;
