import React, { Component } from "react";
import "./LetterSort.css";

class LetterSort extends Component {
  render() {
    return (
      <div className="LetterSort">
        <a href={this.props.link} style={{ textDecoration: "None" }}>
          {this.props.letter}
        </a>
      </div>
    );
  }
}

export default LetterSort;
