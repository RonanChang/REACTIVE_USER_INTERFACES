import React, { Component } from "react";
import "./LetterSort.css";

class LetterSort extends Component {
  render() {
    return (
      <div className="Contact">
        <a href={this.props.link}>{this.props.letter}</a>
      </div>
    );
  }
}

export default LetterSort;
