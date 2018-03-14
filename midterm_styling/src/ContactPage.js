import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./ContactPage.css";
class ContactPage extends Component {
  render() {
    console.log(this.props.contact);
    return (
      <div className="ContactPage">
        <div className="topbar">
          <Link to="/">
            <img className="returnicon" src="../backicon.png" width="30px" />
          </Link>

          <h1>
            {this.props.contact.first_name} {this.props.contact.last_name}
          </h1>
        </div>

        <img className="profileimg" src="../profileicon.png" width="150px" />
        <p>
          <label>Phone:</label>
          <div className="information">{this.props.contact.phone}</div>
        </p>
        <p>
          <label>Room#:</label>
          <div className="information">{this.props.contact.room_num}</div>
        </p>
        <p>
          <label>Email:</label>
          <div className="information">{this.props.contact.email} </div>
        </p>
        <p>
          <label>Address:</label>
          <div className="information"> {this.props.contact.address}</div>
        </p>
        <p>
          <label>Major:</label>
          <div className="information"> {this.props.contact.course}</div>
        </p>
        <p>
          <label>Country:</label>
          <div className="information">{this.props.contact.country}</div>
        </p>
      </div>
    );
  }
}

export default ContactPage;
