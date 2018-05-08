import React, { Component } from "react";
import { Link } from "react-router-dom";

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
      date: "",
      content: "",
      htmls: []
    });
    console.log(pageCopyHomepage);

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
        <Link to="/listpage">List</Link>
        <br />
        <Link to="/bookpage">
          <button onClick={this.addPage}>Add a new page</button>
        </Link>
      </div>
    );
  }
}

export default Homepage;
