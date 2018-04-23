import React, { Component } from "react";
import ContentEditable from "react-contenteditable";
import "./App.css";
import Draggable from "react-draggable"; // The default

class App extends Component {
  constructor() {
    super();
    this.state = { html: "<b>Hello <i>World</i></b>" };
  }

  handleChange = evt => {
    this.setState({ html: evt.target.value });
  };

  render() {
    return (
      <div className="App">
        <Draggable>
          <div> Drag here!!! </div>
        </Draggable>

        <div contentEditable="true"> I can be moved around </div>

        <Draggable enableUserSelectHack={false}>
          <div contentEditable="true"> I can be moved around </div>
        </Draggable>

        <Draggable enableUserSelectHack={false}>
          <input type="text" />
        </Draggable>

        <Draggable>
          <ContentEditable
            html={this.state.html} // innerHTML of the editable div
            disabled={false} // use true to disable edition
            onChange={this.handleChange} // handle innerHTML change
          />
        </Draggable>
      </div>
    );
  }
}

export default App;
