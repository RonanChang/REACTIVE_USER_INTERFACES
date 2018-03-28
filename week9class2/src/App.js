import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./HomePage.js";
import PersonDetail from "./PersonDetail.js";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={HomePage} />
          <Route path="/people/:id" component={PersonDetail} />
        </div>
      </Router>
    );
  }
}

export default App;
