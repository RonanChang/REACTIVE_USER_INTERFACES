import React, { Component } from "react";
import Rnd from "react-rnd";

class Textblock extends Component {
  constructor(props) {
    super(props);
    this.Delete = this.Delete.bind(this);
  }

  Delete() {
    this.props.Delete(this.props.type, this.props.label);
  }

  render() {
    return (
      <Rnd
        default={{
          x: 0,
          y: 0,
          width: 320,
          height: "auto"
        }}
      >
        <div
          width="100%"
          height="100%"
          dangerouslySetInnerHTML={{ __html: this.props.html }}
        />
        <button onClick={this.Delete}>Delete</button>
      </Rnd>
    );
  }
}

export default Textblock;
