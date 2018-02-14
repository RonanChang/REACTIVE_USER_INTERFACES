import React, { Component } from "react";

class Temperature extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }
  onChange(e) {
    this.props.onChange(e.target.value, this.props.scale);
  }

  render() {
    return (
      <div className="Temperature">
        <h3>{this.props.scale}</h3>
        <input
          type="number"
          onChange={this.onChange}
          value={this.props.value}
        />
      </div>
    );
  }
}

export default Temperature;
