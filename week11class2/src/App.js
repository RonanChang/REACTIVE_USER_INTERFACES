import React, { Component } from "react";
import "./App.css";
import { CSSTransition } from "react-transition-group";
import Button from "./Button";

class App extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.state = {
      showmenu: false
    };
  }
  onClick() {
    this.setState({
      showmenu: !this.state.showmenu
    });
  }
  render() {
    return (
      <div className="App">
        {
          //<Button>Click me!</Button>
        }
        <button className="menubutton" onClick={this.onClick}>
          show/hide
        </button>
        <CSSTransition
          in={this.state.showmenu}
          timeout={3000}
          classNames="menu"
          unmountOnExit
        >
          <div className="menu">
            <ul>
              <li>list</li>
              <li>list</li>
              <li>list</li>
              <li>list</li>
              <li>list</li>
            </ul>
          </div>
        </CSSTransition>
      </div>
    );
  }
}

export default App;
