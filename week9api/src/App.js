import React, { Component } from "react";
import "./App.css";
import Article from "./Article.js";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      article: []
    };
  }
  componentDidMount() {
    fetch(
      "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=a1c9e21100034d26ba92568902613e17"
    )
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({
          isLoading: false,
          article: data.response.docs
        });
      });
  }
  render() {
    const articles = this.state.article.map((a, i) => {
      return (
        <Article
          headline={a.headline.main}
          snippet={a.snippet}
          web_url={a.web_url}
          key={i}
        />
      );
    });
    if (this.state.isLoading) {
      return (
        <div className="App">
          <p>Loading...</p>
        </div>
      );
    } else {
      return <div className="App">{articles} </div>;
    }
  }
}

export default App;
