import React, { Component } from "react";
import "./body.css";

class Body extends Component {
  render() {
    return (
      <div className="Body">
        <p>{this.props.body}</p>
      </div>
    );
  }
}

export default Body;
