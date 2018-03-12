import React, { Component } from "react";
import "./AddNew.css";

class AddNew extends Component {
  constructor(props) {
    super(props);
    this.addNew = this.addNew.bind(this);
    this.onChange = this.onChange.bind(this);
    this.state = {
      last_name: "",
      first_name: "",
      phone: "",
      address: "",
      course: "",
      country: ""
    };
  }
  addNew() {
    this.props.addNew(this.state);
  }

  onChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div className="AddNew">
        <label htmlFor="addNew"> Add a new contact: </label>
        <form>
          Last name:<input
            name="last_name"
            type="text"
            onChange={this.onChange}
            value={this.state.last_name}
            autoComplete="last_name"
          />
          First name:<input
            name="first_name"
            type="text"
            onChange={this.onChange}
            value={this.state.first_name}
            autoComplete="first_name"
          />
          Phone:<input
            name="phone"
            type="text"
            onChange={this.onChange}
            value={this.state.phone}
            autoComplete="phone"
          />
          Address:<input
            name="address"
            type="text"
            onChange={this.onChange}
            value={this.state.address}
            autoComplete="phone"
          />
          Course:<input
            name="course"
            type="text"
            onChange={this.onChange}
            value={this.state.course}
            autoComplete="course"
          />
          Country:<input
            name="country"
            type="text"
            onChange={this.onChange}
            value={this.state.country}
            autoComplete="country"
          />
        </form>
        <button onClick={this.addNew}>Add New Person</button>
      </div>
    );
  }
}

export default AddNew;
