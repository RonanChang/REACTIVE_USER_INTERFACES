import React, { Component } from "react";
import "./App.css";
import AddNew from "./addNew.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.addPerson = this.addPerson.bind(this);
    this.state = {
      contacts: [
        { name: "person 1", email: "first@person.com" },
        { name: "person 2", email: "second@person.com" },
        { name: "person 3", email: "third@person.com" }
      ]
    };
  }

  addPerson(state) {
    let copy = this.state.contacts.slice();
    copy.push(state);
    this.setState({
      contacts: copy
    });
  }
  render() {
    const list = this.state.contacts.map((person, i) => {
      return (
        <p key={i}>
          {person.name} - {person.email}
        </p>
      );
    });
    return (
      <div className="App">
        <AddNew onSubmit={this.addPerson} />
        <h2>My List</h2>
        {list}
      </div>
    );
  }
}

export default App;
