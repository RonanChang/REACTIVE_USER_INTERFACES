import React, { Component } from "react";
import MyEditor from "./MyEditor";
import { Editor, EditorState, RichUtils } from "draft-js";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty()
    };
    this.onChange = this.onChange.bind(this);
  }
  onChange(state) {
    console.log(this.state.editorState.getCurrentContent());
    this.setState({ state });
  }
  render() {
    return (
      <div className="App">
        hello
        <MyEditor
          editorState={this.state.editorState}
          onChange={this.onChange}
        />
        here
        <button onClick={this.addInput}>Add input</button>
      </div>
    );
  }
}

export default App;
