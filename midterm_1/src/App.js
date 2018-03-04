import React, { Component } from "react";
import Contact from "./Contact.js";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.sortOrder = this.sortOrder.bind(this);
    this.sortBy = this.sortBy.bind(this);
    this.onSearch = this.onSearch.bind(this);
    this.addNew = this.addNew.bind(this);
    this.addedNew = this.addedNew.bind(this);
    this.state = {
      sortOrder: "asc",
      sortBy: "last",
      search: "",
      contacts: [
        {
          last_name: "Chang",
          first_name: "Ronan",
          phone: "123456",
          address: "shanghai",
          course: "IMA"
        },
        {
          last_name: "Morlock",
          first_name: "Fred",
          phone: "123456",
          address: "shanghai",
          course: "IMA"
        },
        {
          last_name: "Zhang",
          first_name: "Milton",
          phone: "123456",
          address: "shanghai",
          course: "IMA"
        },
        {
          last_name: "Madsen",
          first_name: "Rune",
          phone: "123456",
          address: "shanghai",
          course: "IMA"
        },
        {
          last_name: "Zhang",
          first_name: "Romola",
          phone: "123456",
          address: "shanghai",
          course: "IMA"
        },
        {
          last_name: "Chen",
          first_name: "Fiona",
          phone: "12345678",
          address: "shanghai",
          course: "IMA"
        }
      ]
    };
  }
  sortOrder(e) {
    if (e.target.value === "desc") {
      this.setState({
        sortOrder: "desc"
      });
    } else if (e.target.value === "asc") {
      this.setState({
        sortOrder: "asc"
      });
    }
  }

  sortBy(e) {
    if (e.target.value === "first") {
      this.setState({
        sortBy: "first"
      });
    } else if (e.target.value === "last") {
      this.setState({
        sortBy: "last"
      });
    }
  }

  onSearch(e) {
    this.setState({
      search: e.target.value
    });
  }

  addNew(e) {
    const target = e.target;
    const name = target.name;
    const value = target.value;
    const new_contact = {
      [name]: value
    };
    const contactsvar = this.state.contacts.slice();
    contactsvar.push(new_contact);
    this.setState({
      contacts: contactsvar
    });
  }
  addedNew() {
    alert("You added a new contact!");
  }

  render() {
    let contactsCopy = this.state.contacts.slice();

    contactsCopy.sort(function(a, b) {
      var nameA = a.last_name.toUpperCase(); // ignore upper and lowercase
      var nameB = b.last_name.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }

      // names must be equal
      return 0;
    });

    if (this.state.sortBy === "first") {
      contactsCopy.sort(function(a, b) {
        var nameA = a.first_name.toUpperCase(); // ignore upper and lowercase
        var nameB = b.first_name.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        // names must be equal
        return 0;
      });
    }

    if (this.state.sortOrder === "desc") {
      contactsCopy.reverse();
    }

    if (this.state.search !== "") {
      contactsCopy = contactsCopy.filter(contact => {
        for (let key in contact) {
          if (contact[key].toLowerCase().match(this.state.search)) {
            return true;
          }
        }
        return false;
      });
    }

    const contacts = contactsCopy.map((contact, i) => {
      return (
        <Contact
          key={i}
          first_name={contact.first_name}
          last_name={contact.last_name}
          phone={contact.phone}
          address={contact.address}
          course={contact.course}
          sortBy={this.state.sortBy}
        />
      );
    });
    return (
      <div className="App">
        <label htmlFor="sortOrder">Sort Order: </label>
        <select id="sortOrder" defaultValue="asc" onChange={this.sortOrder}>
          <option value="desc">Descending</option>
          <option value="asc">Ascending</option>
        </select>
        <br />
        <label htmlFor="sortBy">Sort By: </label>
        <select id="sortBy" defaultValue="last" onChange={this.sortBy}>
          <option value="first">First Name</option>
          <option value="last">Last Name</option>
        </select>
        <br />
        <label htmlFor="search"> Search For: </label>
        <input type="text" onChange={this.onSearch} />
        <br />

        <label htmlFor="addNew"> Add a new contact: </label>
        <form onSubmit={this.addedNew}>
          Name:<input name="name" type="text" onChange={this.addNew} />
          Phone:<input name="phone" type="text" onChange={this.addNew} />
          Address:<input name="address" type="text" onChange={this.addNew} />
        </form>

        {contacts}
      </div>
    );
  }
}

export default App;
