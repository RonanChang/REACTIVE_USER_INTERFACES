import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Settingpage.css";
// import Draggable from "react-draggable";
// import Rnd from "react-rnd";

class Settingpage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pages: this.props.pages
    };
  }

  addPage() {
    const pageCopyHomepage = this.state.pages.slice();
    const idnum = pageCopyHomepage.length;
    pageCopyHomepage.push({
      id: idnum,
      title: "",
      date: {
        day: new Date().getDate().toString(),
        weekday: new Date().getDay().toString()
      },
      content: "",
      htmls: []
    });
    //console.log(pageCopyHomepage);

    // this.setState({
    //   pages: pageCopyHomepage
    // });
    //console.log(this.state.pages);
    this.updateAppPages(pageCopyHomepage);
  }

  updateAppPages(pagesvar) {
    this.props.updateAppPages(pagesvar);
  }

  render() {
    return (
      <div className="Settingpage">
        <div className="settingbottombar">
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

export default Settingpage;
