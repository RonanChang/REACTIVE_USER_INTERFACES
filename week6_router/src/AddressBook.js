import React, { Component } from "react";

class AddressBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [{ name: "ronan", phone: "12334" }]
    };
  }

  addNew(e) {
    const target = e.target;
    const new_name = target.name;
    const new_phone = target.phone;

    const new_contact = {
      name: name,
      phone: phone
    };

    const contactsvar = this.state.contacts.slice();
    contactsvar.push(new_contact);
    this.setState({
      contacts: contactsvar
    });
  }
  render() {
    const contactsCopy = this.state.contacts.slice();
    const contacts = contactsCopy.map((contact, i) => {
      return (
        <div key={i}>
          <h3> {contact.name}</h3>
          <p>{contact.phone}</p>
        </div>
      );
    });

    console.log(this.state.contacts);
    return (
      <div className="AddressBook">
        Hello
        <form>
          <input type="text" name="name" />
          <input type="text" name="phone" />
        </form>
        {contacts}
      </div>
    );
  }
}

export default AddressBook;
