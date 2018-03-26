import React, { Component } from "react";
import "./Article.css";

class Article extends Component {
  render() {
    return (
      <div className="Article">
        <h2>{this.props.headline}</h2>
        <div id="content">
          <p>{this.props.snippet}</p>
          <a href={this.props.web_url}>See the article</a>
        </div>
      </div>
    );
  }
}

export default Article;
