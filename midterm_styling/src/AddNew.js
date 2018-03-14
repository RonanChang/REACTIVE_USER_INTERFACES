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
      country: "",
      email: "",
      room_num: ""
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
        <img src="../profileicon.png" width="80px" />
        <div className="addArea">
          <form>
            Last name:<input
              name="last_name"
              type="text"
              onChange={this.onChange}
              value={this.state.last_name}
              autoComplete="last_name"
            />
            <br />
            First name:<input
              name="first_name"
              type="text"
              onChange={this.onChange}
              value={this.state.first_name}
              autoComplete="first_name"
            />
            <br />
            Phone:<input
              name="phone"
              type="text"
              onChange={this.onChange}
              value={this.state.phone}
              autoComplete="phone"
            />
            <br />
            Address:<input
              name="address"
              type="text"
              onChange={this.onChange}
              value={this.state.address}
              autoComplete="phone"
            />
            <br />
            Course:<input
              name="course"
              type="text"
              onChange={this.onChange}
              value={this.state.course}
              autoComplete="course"
            />
            <br />
            Country:<input
              name="country"
              type="text"
              onChange={this.onChange}
              value={this.state.country}
              autoComplete="country"
            />
            Email:<input
              name="email"
              type="text"
              onChange={this.onChange}
              value={this.state.email}
              autoComplete="email"
            />
            <br />
            Room# :<input
              name="room_num"
              type="text"
              onChange={this.onChange}
              value={this.state.room_num}
              autoComplete="room"
            />
          </form>

          <button onClick={this.addNew}>Save</button>
        </div>
      </div>
    );
  }
}

export default AddNew;
