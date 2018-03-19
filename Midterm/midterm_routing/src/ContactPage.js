import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./ContactPage.css";
class ContactPage extends Component {
  render() {
    return (
      <div className="ContactPage">
        <h1>
          {this.props.contact.first_name} {this.props.contact.last_name}
        </h1>
        <p>More details about this person...</p>
        <Link to="/">Back to contact list</Link>
      </div>
    );
  }
}

export default ContactPage;
