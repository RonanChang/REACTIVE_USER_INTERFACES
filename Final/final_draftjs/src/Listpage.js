import React, { Component } from "react";
import "./Listpage.css";
import { Link } from "react-router-dom";
const weekdayMap = {
  "1": "Mon.",
  "2": "Tue.",
  "3": "Wed.",
  "4": "Thu.",
  "5": "Fri.",
  "6": "Sat.",
  "7": "Sun."
};
class Listpage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pages: this.props.pages
    };
    this.deletePage = this.deletePage.bind(this);
    this.updateID = this.updateID.bind(this);
    this.addPage = this.addPage.bind(this);
  }
  addPage() {
    const pageCopy = this.state.pages.slice();
    const idnum = pageCopy.length;
    pageCopy.push({
      id: idnum,
      title: "",
      date: {
        day: new Date().getDate().toString(),
        weekday: new Date().getDay().toString()
      },
      content: "",
      htmls: []
    });

    this.props.updateAppPages(pageCopy);
  }

  deletePage(id) {
    const pageCopy = this.state.pages.slice();
    pageCopy.splice(id, 1);

    this.setState({
      pages: pageCopy
    });
    this.props.updateAppPages(pageCopy);
  }

  updateID() {
    const pageCopy = this.state.pages.slice();
    for (let i = 0; i < pageCopy; i++) {
      const _each = pageCopy[i];
      _each.id = i;
    }
  }
  render() {
    //console.log(this.props.pages.length);
    this.updateID();
    let pages;
    if (this.state.pages.length === 0) {
      pages = "No pages currently.";
    } else {
      const pagesCopy = this.state.pages.slice();
      pages = pagesCopy.map(p => {
        return (
          <PagePreview
            key={"page" + p.id}
            id={p.id}
            date={p.date}
            title={p.title}
            content={p.content}
            deletePage={this.deletePage}
          />
        );
      });
    }
    return (
      <div className="Listpage">
        <div className="listTopbar">
          <div className="booktitle">
            <select>
              <option value="default">Default Scrapbook</option>
            </select>
          </div>
        </div>

        <div className="listContent">
          <div id="month" className="month">
            May 2018
          </div>
          {pages}
        </div>
        <div className="listbottombar">
          <Link to="/">
            <img className="icon" alt="File not found" src="/home.png" />
          </Link>
          <Link to="/listpage">
            <img className="icon" alt="File not found" src="/list1.png" />
          </Link>
          <Link to="/bookpage">
            <button onClick={this.addPage}>
              <img
                id="addpage"
                className="icon"
                alt="File not found"
                src="/add.png"
              />
            </button>
          </Link>
          <img className="icon" alt="File not found" src="/explore.png" />
          <Link to="/setting">
            <img className="icon" alt="File not found" src="/setting.png" />
          </Link>
        </div>
      </div>
    );
  }
}

class PagePreview extends Component {
  constructor(props) {
    super(props);
    this.deletePage = this.deletePage.bind(this);
  }
  deletePage() {
    this.props.deletePage(this.props.id);
  }
  render() {
    let day;
    // if (this.props.date.day.length === 1) {
    //   day = "0" + this.props.date.day;
    // } else {
    day = this.props.date.day;

    let weekday = weekdayMap[this.props.date.weekday];

    return (
      <div className="PagePreview">
        <div className="date">
          <div id="day">{day}</div>
          <div id="weekday">{weekday}</div>
        </div>

        <div className="title">
          <Link id="linktoP" to={"/pages/" + this.props.id}>
            {this.props.title}
          </Link>

          <button className="delete-btn" onClick={this.deletePage}>
            <img className="icon" alt="File not found" src="/delete.png" />
          </button>
        </div>
      </div>
    );
  }
}

export default Listpage;
