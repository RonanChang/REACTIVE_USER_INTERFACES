import React, { Component } from "react";

import "./App.css";

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

  addPerson() {
    let copy = this.state.contacts.slice();
    copy.push({ name: "Person 4", email: "fourth@person.com" });
    this.setState({
      contacts: copy
    });
  }
  render() {
    const list = this.state.contacts.map(person => {
      <p>
        {person.name} - {person.email}
      </p>;
    });
    return <div className="App">{list}</div>;
  }
}

export default App;
