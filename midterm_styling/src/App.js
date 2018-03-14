import React, { Component } from "react";
import ContactList from "./ContactList.js";
import ContactPage from "./ContactPage.js";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.updateAppContacts = this.updateAppContacts.bind(this);
    this.state = {
      contacts: [
        {
          last_name: "Chang",
          first_name: "Ronan",
          phone: "18317145280",
          address: "shanghai",
          course: ["IMA", "Computer Science"],
          country: "China",
          room_num: "T3 309",
          email: "netID@nyu.edu"
        },
        {
          last_name: "Morlock",
          first_name: "Fred",
          phone: "15618754060",
          address: "shanghai",
          course: ["Computer Science", "Honors Math"],
          country: "US",
          room_num: "T3 309",
          email: "netID@nyu.edu"
        },
        {
          last_name: "Zhang",
          first_name: "Milton",
          phone: "18317145280",
          address: "shanghai",
          course: "Finance",
          country: "US",
          room_num: "T3 309",
          email: "netID@nyu.edu"
        },
        {
          last_name: "Madsen",
          first_name: "Rune",
          phone: "18317145280",
          address: "shanghai",
          course: "IMA",
          country: "Denmark",
          room_num: "T3 309",
          email: "netID@nyu.edu"
        },
        {
          last_name: "Kang",
          first_name: "Katniss",
          phone: "18317145280",
          address: "shanghai",
          course: "IMA",
          country: "China",
          room_num: "T3 309",
          email: "netID@nyu.edu"
        },
        {
          last_name: "Xu",
          first_name: "Diana",
          phone: "18317145280",
          address: "shanghai",
          course: "Finance",
          country: "China",
          room_num: "T3 309",
          email: "netID@nyu.edu"
        },
        {
          last_name: "00",
          first_name: "11",
          phone: "18317145280",
          address: "shanghai",
          course: "Computer Science",
          country: "China",
          room_num: "T3 309",
          email: "netID@nyu.edu"
        },
        {
          last_name: "Song",
          first_name: "Chloe",
          phone: "12345678",
          address: "18317145280",
          course: "Finance",
          country: "China",
          room_num: "T3 309",
          email: "netID@nyu.edu"
        },
        {
          last_name: "Pan",
          first_name: "Casey",
          phone: "12345678",
          address: "18317145280",
          course: "Finance",
          country: "China",
          room_num: "T3 309",
          email: "netID@nyu.edu"
        },
        {
          last_name: "Zou",
          first_name: "Billy",
          phone: "18317145280",
          address: "shanghai",
          course: "Computer Science",
          country: "China",
          room_num: "T3 309",
          email: "netID@nyu.edu"
        },
        {
          last_name: "Luo",
          first_name: "Bruce",
          phone: "12345678",
          address: "shanghai",
          course: "IMA",
          country: "China",
          room_num: "T3 309",
          email: "netID@nyu.edu"
        },
        {
          last_name: "Wu",
          first_name: "Shiny",
          phone: "12345678",
          address: "shanghai",
          course: "IMA",
          country: "China",
          room_num: "T3 309",
          email: "netID@nyu.edu"
        },
        {
          last_name: "JH",
          first_name: "Moon",
          phone: "12345678",
          address: "shanghai",
          course: "IMA",
          country: "Korea",
          room_num: "T3 309",
          email: "netID@nyu.edu"
        },
        {
          last_name: "Fang",
          first_name: "Fang",
          phone: "12345678",
          address: "shanghai",
          course: "Finance",
          country: "China",
          room_num: "T3 309",
          email: "netID@nyu.edu"
        },
        {
          last_name: "Dai",
          first_name: "Faye",
          phone: "12345678",
          address: "shanghai",
          course: "Data Science",
          country: "China",
          room_num: "T3 309",
          email: "netID@nyu.edu"
        },
        {
          last_name: "Ernst",
          first_name: "Amy",
          phone: "12345678",
          address: "shanghai",
          course: "Social Science",
          country: "US",
          room_num: "T3 309",
          email: "netID@nyu.edu"
        },
        {
          last_name: "Qu",
          first_name: "Yingzi",
          phone: "12345678",
          address: "shanghai",
          course: "Finance",
          country: "China",
          room_num: "T3 309",
          email: "netID@nyu.edu"
        },
        {
          last_name: "Au",
          first_name: "Amy",
          phone: "12345678",
          address: "shanghai",
          course: "Finance",
          country: "China",
          room_num: "T3 309",
          email: "netID@nyu.edu"
        },
        {
          last_name: "Zhang",
          first_name: "Xinyi",
          phone: "12345678",
          address: "shanghai",
          course: "Data Science",
          country: "China",
          room_num: "T3 309",
          email: "netID@nyu.edu"
        },
        {
          last_name: "Wang",
          first_name: "Jerry",
          phone: "12345678",
          address: "shanghai",
          course: "IMA",
          country: "China",
          room_num: "T3 309",
          email: "netID@nyu.edu"
        },
        {
          last_name: "Guo",
          first_name: "Naijia",
          phone: "12345678",
          address: "shanghai",
          course: "IMA",
          country: "China",
          room_num: "T3 309",
          email: "netID@nyu.edu"
        },
        {
          last_name: "Wynn",
          first_name: "Illenna",
          phone: "12345678",
          address: "shanghai",
          course: "IMA",
          country: "Germany",
          room_num: "T3 309",
          email: "netID@nyu.edu"
        },
        {
          last_name: "Hou",
          first_name: "Xuedan",
          phone: "12345678",
          address: "shanghai",
          course: "Social Science",
          country: "China",
          room_num: "T2 309",
          email: "netID@nyu.edu"
        },
        {
          last_name: "Liang",
          first_name: "Zach",
          phone: "12345678",
          address: "shanghai",
          course: "Finance",
          country: "China",
          room_num: "T3 309",
          email: "netID@nyu.edu"
        },
        {
          last_name: "Kim",
          first_name: "Ho Bin",
          phone: "12345678",
          address: "shanghai",
          course: "Social Science",
          country: "China",
          room_num: "T2 809",
          email: "netID@nyu.edu"
        },
        {
          last_name: "Jiang",
          first_name: "Lavenda",
          phone: "12345678",
          address: "shanghai",
          course: "Social Science",
          country: "China",
          room_num: "T3 309",
          email: "netID@nyu.edu"
        },
        {
          last_name: "I",
          first_name: "U",
          phone: "12345678",
          address: "shanghai",
          course: "Social Science",
          country: "China",
          room_num: "T3 309",
          email: "netID@nyu.edu"
        },
        {
          last_name: "@Some",
          first_name: "One",
          phone: "12345678",
          address: "shanghai",
          course: "Social Science",
          country: "China",
          room_num: "T3 309",
          email: "netID@nyu.edu"
        }
      ]
    };
  }
  updateAppContacts(contacts) {
    this.setState({
      contacts: contacts
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
                <ContactList
                  contacts={this.state.contacts}
                  updateAppContacts={this.updateAppContacts}
                />
              );
            }}
          />

          <Route
            path="/contacts/:id"
            render={props => {
              // Find contact
              const contact = this.state.contacts.find(
                c => c.id === parseInt(props.match.params.id, 10)
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
