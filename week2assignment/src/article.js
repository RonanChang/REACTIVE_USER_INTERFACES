import React, { Component } from "react";
import "./article.css";

class Article extends Component {
  render() {
    return (
      <div className="Article">
        <time>{this.props.date}</time>

        <div className="Content">
          <a href={this.props.link}>{this.props.title}</a>
          <p>{this.props.body}</p>
          <p className="author">
            By <span>{this.props.name}</span>
          </p>
        </div>
        <figure>
          <img src={this.props.src} alt="Image not found." />
        </figure>
      </div>
    );
  }
}

export default Article;
