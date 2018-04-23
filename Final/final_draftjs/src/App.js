import React, { Component } from "react";
import MyEditor from "./MyEditor";
import { Editor, EditorState, RichUtils } from "draft-js";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.editorChanged = this.editorChanged.bind(this);
  }
  editorChanged(state) {
    console.log(state);
  }
  render() {
    return (
      <div className="App">
        hello
        <MyEditor onChange={this.editorChanged} />
        here
        <button onClick={this.addInput}>Add input</button>
      </div>
    );
  }
}

export default App;
