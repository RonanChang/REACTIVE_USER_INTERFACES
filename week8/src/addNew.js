import React, { Component } from "react";

class AddNew extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      name: "",
      email: ""
    };
  }

  onChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value
    });
  }

  onSubmit() {
    this.props.onSubmit(this.state);
    this.setState({
      name: "",
      email: ""
    });
  }
  render() {
    return (
      <div className="AddNew">
        <input
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.onChange}
        />
        <input
          type="text"
          name="email"
          value={this.state.email}
          onChange={this.onChange}
        />

        <button onClick={this.onSubmit}>Save</button>
      </div>
    );
  }
}

export default AddNew;
