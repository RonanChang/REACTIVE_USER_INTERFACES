import React, { Component } from "react";
import Date from "./date.js";
import Content from "./content.js";
import Image from "./image.js";
import Author from "./author.js";
import "./article.css";

class Article extends Component {
  render() {
    return <div className="Article">{this.props.children}</div>;
  }
}

export default Article;
