import React, { Component } from "react";
import "./Page.css";
import { Link } from "react-router-dom";

class Page extends Component {
  render() {
    console.log("here");
    return (
      <div className="Page">
        <div className="pageTopbar">
          <Link to="/listpage">
            <img
              id="bookpage-return"
              className="icon"
              alt="File not found"
              src="/return.png"
            />
            <img
              id="share-icon"
              className="icon"
              alt="File not found"
              src="/share.png"
            />
          </Link>
        </div>
        <div className="sidebar">
          <img className="icon" alt="File not found" src="/edit.png" />
          <img className="icon" alt="File not found" src="/comment.png" />
          <img className="icon" alt="File not found" src="/delete.png" />
        </div>
        <div
          className="page-content"
          dangerouslySetInnerHTML={{ __html: this.props.content }}
        />
      </div>
    );
  }
}
export default Page;
