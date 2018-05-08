import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
// import Draggable from "react-draggable";
// import Rnd from "react-rnd";
import MyEditor from "./MyEditor2";
import Bookpage from "./Bookpage";
import Homepage from "./Homepage";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      htmls: [],
      content: ""
    };
    this.saveHtml = this.saveHtml.bind(this);
    this.updateAppHtmls = this.updateAppHtmls.bind(this);
    this.saveContent = this.saveContent.bind(this);
  }

  saveHtml(html) {
    //console.log(html);
    const htmlCopy = this.state.htmls.slice();
    htmlCopy.push({
      label: htmlCopy.length,
      html: html
    });

    this.setState({
      htmls: htmlCopy
    });
  }

  updateAppHtmls(htmlsvar) {
    this.setState({
      htmls: htmlsvar
    });
  }

  saveContent(content) {
    this.setState({
      content: content
    });
  }

  render() {
    //console.log(this.state.htmls);
    return (
      <Router>
        <div className="App">
          <Route
            exact
            path="/"
            component={props => {
              return <Homepage content={this.state.content} />;
            }}
          />
          <Route
            path="/bookpage"
            component={props => {
              return (
                <Bookpage
                  htmls={this.state.htmls}
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
        </div>
      </Router>
    );
  }
}

export default App;
