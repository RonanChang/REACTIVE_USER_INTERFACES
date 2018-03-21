import React, { Component } from "react";
import "./App.css";
import Contact from "./Contact.js";
class App extends Component {
  constructor(props) {
    super(props);
    this.addPerson = this.addPerson.bind(this);
    this.Delete = this.Delete.bind(this);
    const stringState = localStorage.getItem("mydata");
    if (stringState) {
      this.state = JSON.parse(stringState);
    } else {
      this.state = {
        contacts: []
      };
    }
  }

  Delete(num) {
    const copy = this.state.contacts.slice();
    copy.splice(num, 1);
    this.setState({
      contacts: copy
    });
  }
  addPerson() {
    const copy = this.state.contacts.slice();
    copy.push({ name: "Ronan", major: "IMA", id: copy.length });
    this.setState({
      contacts: copy
    });
  }

  componentDidUpdate() {
    const stringState = JSON.stringify(this.state);
    localStorage.setItem("mydata", stringState);
  }

  render() {
    const list = this.state.contacts.map(c => (
      <Contact
        name={c.name}
        major={c.major}
        key={c.id}
        Id={c.id}
        Delete={this.Delete}
      />
    ));
    return (
      <div className="App">
        <h1>My List</h1>
        <button onClick={this.addPerson}>Add contact</button>
        {list}
      </div>
    );
  }
}

export default App;
