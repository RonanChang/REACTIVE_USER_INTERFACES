import React, { Component } from "react";
import Contact from "./Contact.js";
import Modal from "react-modal";
import "./ContactList.css";
import AddNew from "./AddNew";
import { Link } from "react-router-dom";
import LetterSort from "./LetterSort";

const addStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    height: "400px",
    width: "300px",
    backgroundColor: "#eeeeee"
  }
};
const sortStyles = {
  content: {
    top: "80%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    height: "150px",
    width: "356px",
    backgroundColor: "rgb(192, 200, 200)",
    color: "rgb(102,118,118)"
  }
};
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
    this.openModal = this.openModal.bind(this);
    this.openSort = this.openSort.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.closeSort = this.closeSort.bind(this);
    //this.afterOpenModal = this.afterOpenModal.bind(this);

    this.state = {
      sortOrder: "asc",
      sortBy: "last_name",
      search: "",
      filterBy: "no_filter",
      isModalOpen: false,
      isSortOpen: false,
      contacts: this.props.contacts
    };
  }

  openModal() {
    this.setState({ isModalOpen: true });
  }
  openSort() {
    this.setState({ isSortOpen: true });
  }

  closeModal() {
    this.setState({
      isModalOpen: false
    });
  }
  closeSort() {
    this.setState({
      isSortOpen: false
    });
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

    //console.log(this.state.contacts);
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
      if (this.state.filterBy === "2" || this.state.filterBy === "3") {
        contactsCopy = contactsCopy.filter(contact => {
          for (let key in contact) {
            if (contact.room_num.match(this.state.filterBy)) {
              return true;
            }
          }
          return false;
        });
      }

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
          <Link to={"/contacts/" + contact.id}>
            <Contact
              first_name={contact.first_name}
              last_name={contact.last_name}
              phone={contact.phone}
              address={contact.address}
              course={contact.course}
              country={contact.country}
              email={contact.email}
              room_num={contact.room_num}
              sortBy={this.state.sortBy}
            />
          </Link>
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
    let rooms = [];
    for (let i = 0; i < contactsCopy.length; i++) {
      const course = contactsCopy[i].course;
      const country = contactsCopy[i].country;
      const room = contactsCopy[i].room_num;
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

      rooms.push(room[1]);
    }
    courses = Array.from(new Set(courses));
    countries = Array.from(new Set(countries));
    rooms = Array.from(new Set(rooms));
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

    const RoomOptions = rooms.map((room, i) => {
      return (
        <option key={i} value={room}>
          Tower {room}
        </option>
      );
    });

    //var Highlight = require("react-highlighter");

    return (
      <div className="ContactList">
        <div className="AllContacts">
          <div className="search_add">
            <div className="searchBox">
              <div className="searchIcon">
                <img
                  className="searchImg"
                  src="../searchicon.png"
                  width="50px"
                  height="auto"
                />
              </div>
              <input
                className="searchArea"
                type="text"
                onChange={this.onSearch}
                value={this.state.search}
                placeholder="Enter search term"
              />
              <button className="clearSearch" onClick={this.clearSearch}>
                <img src="../clearicon.png" height="30px" />
              </button>
            </div>

            <div className="addModal">
              <button onClick={this.openModal}>
                <img className="addicon" src="../addicon.png" height="30px" />
              </button>
              <Modal
                isOpen={this.state.isModalOpen}
                onRequestClose={this.closeModal}
                style={addStyles}
                contentLabel="Add new contact"
              >
                <AddNew addNew={this.addNew} />
              </Modal>
            </div>
          </div>

          <div className="contactList"> {contacts} </div>
        </div>

        <div className="sidebar">
          <div className="LetterSorts">{LetterSorts}</div>
          <div className="sortModal">
            <button onClick={this.openSort}>
              <img src="../settingsicon.png" height="50px" />
            </button>
            <Modal
              isOpen={this.state.isSortOpen}
              onRequestClose={this.closeSort}
              style={sortStyles}
              contentLabel="sort_filter"
            >
              <label htmlFor="sortOrder">Sort Order: </label>
              <select
                id="sortOrder"
                defaultValue="asc"
                onChange={this.sortOrder}
              >
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
              <label htmlFor="filterBy">Filter By: </label>
              <select
                id="filterBy"
                defaultValue="no_filter"
                onChange={this.filterBy}
              >
                <optgroup label="Course">{CourseOptions}</optgroup>
                <optgroup label="Country">{CountryOptions}</optgroup>
                <optgroup label="Room">{RoomOptions}</optgroup>
                <option value="no_filter">Show All</option>
              </select>
            </Modal>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactList;
