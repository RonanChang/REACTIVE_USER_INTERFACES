import React, { Component } from "react";
import "./content.css";

class Content extends Component {
  render() {
    return <div className="Content"> {this.props.myText} </div>;
  }
}

export default Content;
