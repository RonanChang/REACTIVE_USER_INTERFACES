import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import MyEditor from "./MyEditor";
import Homepage from "./Homepage";

class App extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.state = {
      html: []
    };
  }
  onChange(label, html) {
    //console.log(html);
    const htmlCopy = this.state.html.slice();
    htmlCopy.push({
      label: label,
      html: html
    });
    this.setState({
      html: html
    });
    //console.log(this.state.html);
  }
  render() {
    return (
      <Router>
        <div className="App">
          <Route
            exact
            path="/"
            component={props => {
              return <Homepage html={this.state.html} />;
            }}
          />
          <Route
            path="/editor"
            component={props => {
              return <MyEditor onChange={this.onChange} />;
            }}
          />
        </div>
      </Router>
    );
  }
}

export default App;
