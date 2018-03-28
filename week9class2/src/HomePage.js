import React, { Component } from "react";
import { Link } from "react-router-dom";
class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: this.props.isLoading,
      people: this.props.people
    };
  }
  // componentDidMount() {
  //   fetch("https://swapi.co/api/people/")
  //     .then(response => {
  //       return response.json();
  //     })
  //     .then(json => {
  //       this.setState({
  //         isLoading: false,
  //         people: json.results
  //       });
  //     });
  // }

  render() {
    if (this.state.isLoading) {
      return <p> Loading... </p>;
    } else {
      const list = this.state.people.map(p => {
        const splitUrl = p.url.split("/");
        const id = splitUrl[splitUrl.length - 2];
        return (
          <div key={p.url}>
            <Link to={"/people/" + id}>
              <h3>{p.name}</h3>
            </Link>
          </div>
        );
      });

      return <div className="HomePage">{list}</div>;
    }
  }
}

export default HomePage;
