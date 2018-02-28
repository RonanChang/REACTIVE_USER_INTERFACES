import React, { Component } from "react";
import Tweet from "./Tweet.js";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.sortAscending = this.sortAscending.bind(this);
    this.sortDescending = this.sortDescending.bind(this);
    this.showLatest = this.showLatest.bind(this);
    this.showAll = this.showAll.bind(this);
    this.onSearch = this.onSearch.bind(this);
    this.state = {
      sort: "asc",
      show: "all",
      search: "",
      tweets: [
        { username: "Ronan", context: "This is the first tweet", id: 0 },
        { username: "Ronan", context: "This is the second tweet", id: 1 },
        { username: "Ronan", context: "This is the third tweet", id: 2 },
        { username: "Rune", context: "This is the 4th tweet", id: 3 },
        { username: "others", context: "This is the 5th tweet", id: 4 },
        { username: "others", context: "This is the 6th tweet", id: 5 },
        { username: "Rune", context: "This is the 7th tweet", id: 6 },
        { username: "Ronan", context: "This is the 8th tweet", id: 7 }
      ]
    };

    //this.tweetsCopy = this.state.tweets.slice();
  }
  sortAscending() {
    this.setState({
      sort: "asc"
    });
  }
  sortDescending() {
    this.setState({
      sort: "desc"
    });
  }
  showLatest() {
    this.setState({
      show: "latest"
    });
  }
  showAll() {
    this.setState({
      show: "all"
    });
  }
  onSearch(e) {
    this.setState({
      search: e.target.value
    });
  }

  render() {
    let tweetsCopy = this.state.tweets.slice();

    if (this.state.sort === "desc") {
      tweetsCopy.reverse();
    }

    if (this.state.show === "latest") {
      tweetsCopy = tweetsCopy.filter(tweet => {
        return tweet.id > 4;
      });
    }

    if (this.state.search !== "") {
      tweetsCopy = tweetsCopy.filter(tweet => {
        return (
          tweet.context.match(this.state.search) ||
          tweet.username.match(this.state.search)
        );
      });
    }
    const tags = tweetsCopy.map(tweet => {
      return (
        <Tweet
          username={tweet.username}
          context={tweet.context}
          key={tweet.id}
        />
      );
    });
    return (
      <div className="App">
        <button onClick={this.sortAscending}> Ascending</button>
        <button onClick={this.sortDescending}> Descending</button>
        <button onClick={this.showLatest}> Show Latest</button>
        <button onClick={this.showAll}> Show All</button>
        <input type="text" onChange={this.onSearch} />
        {tags}
      </div>
    );
  }
}

export default App;
