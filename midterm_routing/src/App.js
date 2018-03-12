import React, { Component } from "react";
import ContactList from "./ContactList.js";
import ContactPage from "./ContactPage.js";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [
        {
          last_name: "Chang",
          first_name: "Ronan",
          phone: "18317145280",
          address: "shanghai",
          course: "IMA",
          country: "China",
          id: "C"
        },
        {
          last_name: "Morlock",
          first_name: "Fred",
          phone: "15618754060",
          address: "shanghai",
          course: "CS",
          country: "USA",
          id: "M"
        },
        {
          last_name: "Zhang",
          first_name: "Milton",
          phone: "123456",
          address: "shanghai",
          course: "Finance",
          country: "USA",
          id: "Z"
        },
        {
          last_name: "Madsen",
          first_name: "Rune",
          phone: "123456",
          address: "shanghai",
          course: "IMA",
          country: "Denmark",
          id: "M"
        },
        {
          last_name: "Zhang",
          first_name: "Romola",
          phone: "123456",
          address: "shanghai",
          course: "IMA",
          country: "China",
          id: "Z"
        },
        {
          last_name: "Chen",
          first_name: "Fiona",
          phone: "12345678",
          address: "shanghai",
          course: "Finance",
          country: "China",
          id: "C"
        }
      ]
    };
  }
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={ContactList} />
          <Route
            path="/contacts/:id"
            render={props => {
              // Find contact
              const contact = this.state.contacts.find(
                c => c.id === parseInt(props.match.params.id)
              );

              // Pass to component as prop
              return <ContactPage contact={contact} />;
            }}
          />
        </div>
      </Router>
    );
  }
}

export default App;
