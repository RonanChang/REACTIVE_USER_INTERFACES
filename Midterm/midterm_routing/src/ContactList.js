import React, { Component } from "react";
import Contact from "./Contact.js";
import "./ContactList.css";
import AddNew from "./AddNew";
import { Link } from "react-router-dom";
import LetterSort from "./LetterSort";
import { BrowserRouter as Router, Route } from "react-router-dom";

class ContactList extends Component {
  constructor(props) {
    super(props);
    this.sortOrder = this.sortOrder.bind(this);
    this.sortBy = this.sortBy.bind(this);
    this.filterBy = this.filterBy.bind(this);
    this.onSearch = this.onSearch.bind(this);
    this.addNew = this.addNew.bind(this);
    this.isAlpha = this.isAlpha.bind(this);
    this.clearSearch = this.clearSearch.bind(this);
    this.assignID = this.assignID.bind(this);
    this.updateAppContacts = this.updateAppContacts.bind(this);
    this.state = {
      sortOrder: "asc",
      sortBy: "last_name",
      search: "",
      filterBy: "no_filter",
      contacts: this.props.contacts
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
        sortBy: "first_name"
      });
    } else if (e.target.value === "last") {
      this.setState({
        sortBy: "last_name"
      });
    }
  }

  onSearch(e) {
    this.setState({
      search: e.target.value
    });
  }
  clearSearch() {
    this.setState({
      search: ""
    });
  }

  addNew(state) {
    const contactsvar = this.state.contacts.slice();
    contactsvar.push(state);
    //console.log(state);
    this.updateAppContacts(contactsvar);
    this.setState({
      contacts: contactsvar
    });
  }

  filterBy(e) {
    this.setState({
      filterBy: e.target.value
    });
  }
  isAlpha(ch) {
    return ch.match(/[A-Za-z]/);
  }

  assignID() {
    for (let i = 0; i < this.state.contacts.length; i++) {
      const contact = this.state.contacts[i];
      contact.id = i + 1;
    }

    console.log(this.state.contacts);
  }

  updateAppContacts(contactsvar) {
    this.props.updateAppContacts(contactsvar);
  }

  render() {
    this.assignID();

    let contactsCopy = this.state.contacts.slice();
    let letters = [];

    //for the letter buttons
    if (this.state.sortBy === "last_name") {
      for (let i = 0; i < contactsCopy.length; i++) {
        let letter = contactsCopy[i].last_name[0].toUpperCase();

        if (this.isAlpha(letter)) {
          if (!letters.includes(letter)) {
            letters.push(letter);
          }
        } else {
          if (!letters.includes("#")) {
            letters.push("#");
          }
        }
      }
    }

    //sorting asc
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

    //sort by first name
    if (this.state.sortBy === "first_name") {
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
      //for the letter buttons
      for (let i = 0; i < contactsCopy.length; i++) {
        let letter = contactsCopy[i].first_name[0].toUpperCase();

        if (this.isAlpha(letter)) {
          if (!letters.includes(letter)) {
            letters.push(letter);
          }
        } else {
          if (!letters.includes("#")) {
            letters.push("#");
          }
        }
      }
    }

    //console.log(letters);

    //sorting desc
    if (this.state.sortOrder === "desc") {
      contactsCopy.reverse();
    }

    //search
    if (this.state.search !== "") {
      contactsCopy = contactsCopy.filter(contact => {
        for (let key in contact) {
          if (
            contact[key]
              .toString()
              .toLowerCase()
              .match(this.state.search)
          ) {
            return true;
          }
        }
        return false;
      });
    }

    //filter
    if (this.state.filterBy !== "no_filter") {
      contactsCopy = contactsCopy.filter(contact => {
        for (let key in contact) {
          if (contact[key].toString().match(this.state.filterBy)) {
            return true;
          }
        }
        return false;
      });
    }

    //return <Contact /> with a Link to ContactPage
    const contacts = contactsCopy.map(contact => {
      const letterID =
        this.state.sortBy === "last_name"
          ? this.isAlpha(contact.last_name[0]) ? contact.last_name[0] : "#"
          : this.isAlpha(contact.first_name[0]) ? contact.first_name[0] : "#";

      //console.log(letterID);
      return (
        <div className="ContactWithLink" key={contact.id} id={letterID}>
          <Contact
            first_name={contact.first_name}
            last_name={contact.last_name}
            phone={contact.phone}
            address={contact.address}
            course={contact.course}
            country={contact.country}
            sortBy={this.state.sortBy}
          />
          <Link to={"/contacts/" + contact.id}>Go to person</Link>
        </div>
      );
    });

    //return <LetterSort />

    letters.sort(function(a, b) {
      if (a < b) {
        return -1;
      }
      if (a > b) {
        return 1;
      }

      return 0;
    });

    const LetterSorts = letters.map((letter, i) => {
      const link = "#" + letter;
      return <LetterSort key={i} link={link} letter={letter} />;
    });

    //sort by courses
    let courses = [];
    let countries = [];
    for (let i = 0; i < contactsCopy.length; i++) {
      const course = contactsCopy[i].course;
      const country = contactsCopy[i].country;

      if (Array.isArray(course)) {
        courses.concat(course);
      } else {
        courses.push(course);
      }

      if (Array.isArray(country)) {
        countries.concat(country);
      } else {
        countries.push(country);
      }
    }
    courses = Array.from(new Set(courses));
    countries = Array.from(new Set(countries));
    const CourseOptions = courses.map((course, i) => {
      return (
        <option key={i} value={course}>
          {course}
        </option>
      );
    });

    const CountryOptions = countries.map((country, i) => {
      return (
        <option key={i} value={country}>
          {country}
        </option>
      );
    });

    var Highlight = require("react-highlighter");

    return (
      <div className="ContactList">
        <div className="AllContacts">
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

          <div className="Search">
            <label htmlFor="search"> Search For: </label>
            <input
              type="text"
              onChange={this.onSearch}
              value={this.state.search}
            />
            <button onClick={this.clearSearch}>Clear</button>
          </div>
          <br />

          <select
            id="filterBy"
            defaultValue="no_filter"
            onChange={this.filterBy}
          >
            <optgroup label="Course">{CourseOptions}</optgroup>

            <optgroup label="Country">{CountryOptions}</optgroup>
            <option value="no_filter">Show All</option>
          </select>
          <br />
          <AddNew addNew={this.addNew} />

          {contacts}
        </div>

        <div className="LetterSort">{LetterSorts}</div>
      </div>
    );
  }
}

export default ContactList;
