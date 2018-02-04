import React, { Component } from "react";
import "./author.css";

class Author extends Component {
  render() {
    return (
      <div className="Author">
        <p>{this.props.name}</p>
      </div>
    );
  }
}

export default Author;
