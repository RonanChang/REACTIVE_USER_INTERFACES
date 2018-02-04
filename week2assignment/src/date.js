import React, { Component } from "react";
import "./date.css";

class Date extends Component {
  render() {
    return (
      <div className="Date">
        <p>
          {this.props.mon}. {this.props.day}, {this.props.year}
        </p>
      </div>
    );
  }
}

export default Date;
