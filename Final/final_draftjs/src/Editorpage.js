import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./Editorpage.css";
// import Draggable from "react-draggable";
// import Rnd from "react-rnd";
import MyEditor from "./MyEditor";

class Editorpage extends Component {
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
    return <MyEditor />;
  }
}

export default Editorpage;
