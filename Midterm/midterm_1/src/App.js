import React, { Component } from "react";
import Contact from "./Contact.js";
import "./App.css";
import AddNew from "./AddNew";

class App extends Component {
  constructor(props) {
    super(props);
    this.sortOrder = this.sortOrder.bind(this);
    this.sortBy = this.sortBy.bind(this);
    this.filterBy = this.filterBy.bind(this);
    this.onSearch = this.onSearch.bind(this);
    this.addNew = this.addNew.bind(this);
    this.state = {
      sortOrder: "asc",
      sortBy: "last",
      search: "",
      filterBy: "no_filter",
      contacts: [
        {
          last_name: "Chang",
          first_name: "Ronan",
          phone: "123456",
          address: "shanghai",
          course: "IMA",
          country: "China"
        },
        {
          last_name: "Morlock",
          first_name: "Fred",
          phone: "123456",
          address: "shanghai",
          course: "CS",
          country: "USA"
        },
        {
          last_name: "Zhang",
          first_name: "Milton",
          phone: "123456",
          address: "shanghai",
          course: "Finance",
          country: "USA"
        },
        {
          last_name: "Madsen",
          first_name: "Rune",
          phone: "123456",
          address: "shanghai",
          course: "IMA",
          country: "Denmark"
        },
        {
          last_name: "Zhang",
          first_name: "Romola",
          phone: "123456",
          address: "shanghai",
          course: "IMA",
          country: "China"
        },
        {
          last_name: "Chen",
          first_name: "Fiona",
          phone: "12345678",
          address: "shanghai",
          course: "Finance",
          country: "China"
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

  addNew(state) {
    const contactsvar = this.state.contacts.slice();
    contactsvar.push(state);
    this.setState({
      contacts: contactsvar
    });
  }

  filterBy(e) {
    this.setState({
      filterBy: e.target.value
    });
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

    if (this.state.filterBy !== "no_filter") {
      contactsCopy = contactsCopy.filter(contact => {
        for (let key in contact) {
          if (contact[key].match(this.state.filterBy)) {
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
          country={contact.country}
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

        <select id="filterBy" defaultValue="no_filter" onChange={this.filterBy}>
          <optgroup label="Course">
            <option value="IMA"> IMA </option>
            <option value="CS">Computer Science</option>
            <option value="Finance">Finance</option>
          </optgroup>
          <optgroup label="Country">
            <option value="China"> China </option>
            <option value="USA">USA</option>
          </optgroup>
          <option value="no_filter">No filter</option>
        </select>
        <br />

        {contacts}

        <AddNew addNew={this.addNew} />
      </div>
    );
  }
}

export default App;
