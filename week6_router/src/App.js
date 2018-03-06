import React, { Component } from "react";
import "./App.css";
import { Link, Route, BrowserRouter as Router } from "react-router-dom";
import AddressBook from "./AddressBook.js";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          Hello
          <Link to="/addressbook/ics"> Address Book</Link>
          <Route exact path="/addressbook/:id" component={AddressBook} />
        </div>
      </Router>
    );
  }
}

export default App;
