import React, { Component } from "react";
import "./Input.css";
import ContentEditable from "react-contenteditable";

class Input extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.Delete = this.Delete.bind(this);
  }
  onChange(e) {
    this.props.onChange(this.props.label, e.target.value);
  }
  Delete() {
    this.props.Delete(this.props.label);
  }
  render() {
    return (
      <div className="Input">
        <ContentEditable
          label={this.props.label}
          html={this.props.html} // innerHTML of the editable div
          disabled={false} // use true to disable edition
          onChange={this.onChange} // handle innerHTML change
        />
        <button className="deleteButton" onClick={this.Delete}>
          Delete
        </button>
      </div>
    );
  }
}

export default Input;
