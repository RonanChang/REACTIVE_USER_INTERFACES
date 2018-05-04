import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Homepage extends Component {
  render() {
    return (
      <div className="Homepage">
        This is the homepage
        <Link to="/editor">Editor</Link>
        <div dangerouslySetInnerHTML={{ __html: this.props.html }} />
      </div>
    );
  }
}

export default Homepage;
