import React, { Component } from "react";
import "./Contact.css";

class Contact extends Component {
  render() {
    //when we change the sort order, I want the display order to be changed too
    if (this.props.sortBy === "first_name") {
      return (
        <div className="Contact">
          <h3 id="name">
            {this.props.first_name} {this.props.last_name}
          </h3>

          <div id="detail">
            <p id="phone">{this.props.phone}</p>
            <p id="address">{this.props.address}</p>
            <p id="course">{this.props.course}</p>
          </div>
        </div>
      );
    } else {
      return (
        <div className="Contact">
          <h3 id="name">
            {this.props.last_name}, {this.props.first_name}
          </h3>

          <div id="detail">
            <p id="phone">{this.props.phone}</p>
            <p id="address">{this.props.address}</p>
            <p id="course">{this.props.course}</p>
            <p id="country">{this.props.country}</p>
          </div>
        </div>
      );
    }
  }
}

export default Contact;
