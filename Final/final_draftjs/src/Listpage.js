import React, { Component } from "react";
import "./Listpage.css";
import { Link } from "react-router-dom";

class Listpage extends Component {
  render() {
    //console.log(this.props.pages.length);
    let pages;
    if (this.props.pages.length === 0) {
      pages = "No pages currently.";
    } else {
      const pagesCopy = this.props.pages.slice();
      pages = pagesCopy.map(p => {
        return (
          <div key={"page" + p.id}>
            <PagePreview date={p.date} title={p.title} content={p.content} />
          </div>
        );
      });
    }
    return (
      <div className="Listpage">
        <div className="listTopbar">
          <Link to="/">
            <img
              id="bookpage-return"
              className="icon"
              alt="File not found"
              src="/return.png"
            />
          </Link>
        </div>

        <div className="listContent">{pages}</div>
      </div>
    );
  }
}

class PagePreview extends Component {
  render() {
    return (
      <div className="PagePreview">
        <h3>
          {this.props.date}
          {this.props.title}
        </h3>
        <Link to="/listpage/0">Detail</Link>
      </div>
    );
  }
}

export default Listpage;
