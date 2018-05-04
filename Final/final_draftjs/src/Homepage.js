import React, { Component } from "react";
import { Link } from "react-router-dom";

// import Draggable from "react-draggable";
// import Rnd from "react-rnd";

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editors: [],
      imgUrl: [],
      videoUrl: [],
      audioUrl: []
    };
  }

  render() {
    return (
      <div className="Homepage">
        <Link to="/bookpage">bookpage</Link>
      </div>
    );
  }
}

export default Homepage;
