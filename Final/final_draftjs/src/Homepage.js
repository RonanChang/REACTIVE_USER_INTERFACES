import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Homepage.css";
// import Draggable from "react-draggable";
// import Rnd from "react-rnd";

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pages: this.props.pages
    };
    this.addPage = this.addPage.bind(this);
    this.updateAppPages = this.updateAppPages.bind(this);
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
      <div className="Homepage">
        <div className="content">
          <div className="Profile">
            <img id="profileicon" src="/profileicon.png" alt="File not found" />
            <br />
            Ronan.
          </div>
          <div className="Books">
            <BookPreview id="fir" name="Default Scrapbook" />
            <BookPreview id="sec" name="Travel Diary" />
            <BookPreview id="thir" name="Look Book" />
            <BookPreview id="four" imgsrc="/addbook.png" />
          </div>
        </div>
        <div className="bottombar">
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

class BookPreview extends Component {
  render() {
    return (
      <Link to="/listpage">
        <div className="BookPreview" id={this.props.id}>
          {this.props.name}
          <img id="addbook" src={this.props.imgsrc} />
        </div>
      </Link>
    );
  }
}

export default Homepage;
