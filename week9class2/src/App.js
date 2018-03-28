import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./HomePage.js";
import PersonDetail from "./PersonDetail.js";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      people: []
    };
  }
  componentDidMount() {
    fetch("https://swapi.co/api/people/")
      .then(response => {
        return response.json();
      })
      .then(json => {
        this.setState({
          isLoading: false,
          people: json.results
        });
      });
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Route
            exact
            path="/"
            component={props => {
              return (
                <HomePage
                  isLoading={this.state.isLoading}
                  people={this.state.people}
                />
              );
            }}
          />
          <Route path="/people/:id" component={PersonDetail} />
        </div>
      </Router>
    );
  }
}

export default App;
