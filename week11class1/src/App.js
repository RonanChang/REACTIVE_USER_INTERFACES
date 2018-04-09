import React, { Component } from "react";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>Welcome!</header>
        <div className="wrapper">
          <aside> sidebar </aside>
          <main>
            <p> Content </p>
            <p> Content </p>
            <p> Content </p>
            <p> Content </p>
          </main>
        </div>
      </div>
    );
  }
}

export default App;
