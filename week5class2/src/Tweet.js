import React, { Component } from "react";
import "./Tweet.css";

class Tweet extends Component {
  render() {
    return (
      <div className="Tweet">
        <h3 id="username">{this.props.username}</h3>
        <p id="context"> {this.props.context}</p>
      </div>
    );
  }
}

export default Tweet;
