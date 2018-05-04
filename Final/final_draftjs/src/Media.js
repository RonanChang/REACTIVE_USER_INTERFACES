import React, { Component } from "react";
import Rnd from "react-rnd";

class Media extends Component {
  constructor(props) {
    super(props);
    this.Delete = this.Delete.bind(this);
  }

  Delete() {
    this.props.Delete(this.props.type, this.props.label);
  }

  render() {
    let media;
    if (this.props.type === "img") {
      media = (
        <img
          alt="File not found"
          draggable="false"
          width="100%"
          height="100%"
          src={this.props.src}
        />
      );
    } else if (this.props.type === "vid") {
      media = (
        <video width="100%" height="100%" controls>
          <source src={this.props.src} />
        </video>
      );
    } else if (this.props.type === "aud") {
      media = (
        <audio width="100%" height="100%" controls>
          <source src={this.props.src} />
        </audio>
      );
    }

    return (
      <Rnd
        default={{
          x: 0,
          y: 0,
          width: 320,
          height: "auto"
        }}
      >
        {media}
        <button onClick={this.Delete}>Delete</button>
      </Rnd>
    );
  }
}
export default Media;
