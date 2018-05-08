import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
// import Draggable from "react-draggable";
// import Rnd from "react-rnd";
import MyEditor from "./MyEditor2";
import Bookpage from "./Bookpage";
import Homepage from "./Homepage";
import Listpage from "./Listpage";
import Page from "./Page.js";

class App extends Component {
  constructor(props) {
    super(props);
    let initialState = localStorage.getItem("appData");
    if (initialState) {
      this.state = JSON.parse(initialState);
    } else {
      this.state = {
        htmls: [],
        pages: []
      };
    }

    this.saveHtml = this.saveHtml.bind(this);
    this.updateAppHtmls = this.updateAppHtmls.bind(this);
    this.updateAppPages = this.updateAppPages.bind(this);
    this.saveContent = this.saveContent.bind(this);
  }

  componentDidUpdate() {
    localStorage.setItem("appData", JSON.stringify(this.state));
  }

  //because the edit function is not one of my goals here, I assume everytime you open a page is always open a new page,
  //so it will be the last element in the array.
  saveHtml(html) {
    //console.log(html);
    const index = this.state.pages.length - 1;
    const pagesCopy = this.state.pages.slice();
    //console.log(index);
    pagesCopy[index].htmls.push({
      label: pagesCopy[index].htmls.length,
      html: html
    });

    this.setState({
      pages: pagesCopy
    });
  }

  updateAppHtmls(htmlsvar) {
    const index = this.state.pages.length - 1;
    const pagesCopy = this.state.pages.slice();
    pagesCopy[index].htmls = htmlsvar;

    this.setState({
      pages: pagesCopy
    });
  }

  updateAppPages(pagesvar) {
    this.setState({
      pages: pagesvar
    });
  }

  saveContent(title, date, content) {
    const index = this.state.pages.length - 1;
    const pageCopy = this.state.pages.slice();
    pageCopy[index].title = title;
    pageCopy[index].date = date;
    pageCopy[index].content = content;
    this.setState({
      pages: pageCopy
    });
  }

  render() {
    console.log(this.state.pages);
    return (
      <Router>
        <div className="App">
          <Route
            exact
            path="/"
            component={props => {
              return (
                <Homepage
                  pages={this.state.pages}
                  updateAppPages={this.updateAppPages}
                />
              );
            }}
          />
          <Route
            path="/bookpage"
            component={props => {
              return (
                <Bookpage
                  htmls={this.state.pages[this.state.pages.length - 1].htmls}
                  updateAppHtmls={this.updateAppHtmls}
                  saveContent={this.saveContent}
                />
              );
            }}
          />
          <Route
            path="/editorpage"
            component={props => {
              return <MyEditor saveHtml={this.saveHtml} />;
            }}
          />

          <Route
            path="/listpage"
            component={props => {
              return <Listpage pages={this.state.pages} />;
            }}
          />

          <Route
            path="/listpage/:id"
            render={props => {
              const page = this.state.pages.find(
                p => p.id === parseInt(props.match.params.id, 10)
              );
              return <Page content={page} />;
            }}
          />
        </div>
      </Router>
    );
  }
}

export default App;
