import React, { Component } from "react";

import "./AppFlex.css";
import "./AppGrid.css";

class App extends Component {
  render() {
    /*
    //For the AppFlex css
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
    */

    //for the AppGrid css
    return (
      <div className="App">
        <div className="wrapper">
          <header>Welcome!</header>
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
