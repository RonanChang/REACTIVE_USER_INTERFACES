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
            <div className="phone">
              <img className="phoneicon" src="../phoneicon.png" />
              <p>{this.props.phone}</p>
            </div>
            <div className="room">
              <img className="locationicon" src="../locationicon.png" />
              <p>{this.props.room_num}</p>
            </div>
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
            <div className="phone">
              <img className="phoneicon" src="../phoneicon.png" />
              <p>{this.props.phone}</p>
            </div>
            <div className="room">
              <img className="locationicon" src="../locationicon.png" />
              <p>{this.props.room_num}</p>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Contact;
