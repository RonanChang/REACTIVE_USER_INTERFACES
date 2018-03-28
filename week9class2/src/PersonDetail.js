import React, { Component } from "react";
import { Link } from "react-router-dom";
class PersonDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      person: {}
    };
  }

  componentDidMount() {
    fetch("https://swapi.co/api/people/" + this.props.match.params.id + "/")
      .then(response => {
        return response.json();
      })
      .then(data => {
        //console.log(data);
        this.setState({
          isLoading: false,
          person: data
        });
      });
  }
  render() {
    if (this.state.isLoading) {
      return <p>Loading...</p>;
    }
    return (
      <div className="PersonDetail">
        <h1> {this.state.person.name}</h1>
        <ul>
          <li> Height:{this.state.person.height}</li>
          <li> Gender:{this.state.person.gender}</li>
          <li> Hair Color:{this.state.person.hair_color}</li>
          <li> Skin Color:{this.state.person.skin_color}</li>
        </ul>

        <Link to="/"> Back to list </Link>
      </div>
    );
  }
}

export default PersonDetail;
