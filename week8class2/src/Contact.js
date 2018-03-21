import React, { Component } from "react";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.Delete = this.Delete.bind(this);
  }
  Delete() {
    const num = this.props.Id;
    this.props.Delete({ num });
  }
  render() {
    return (
      <div className="Contact">
        <p>
          {this.props.name} - {this.props.major}
          <button onClick={this.Delete}>Delete</button>
        </p>
      </div>
    );
  }
}

export default Contact;
