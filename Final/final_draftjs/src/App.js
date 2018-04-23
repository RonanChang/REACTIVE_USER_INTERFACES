import React, { Component } from "react";
import MyEditor from "./MyEditor";
import { Editor, EditorState, RichUtils } from "draft-js";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editors: [
        {
          label: 0,
          state: null
        }
      ]
    };
    this.editorChanged = this.editorChanged.bind(this);
    this.addInput = this.addInput.bind(this);
  }
  editorChanged(label, state) {
    const stateCopy = this.state.editors.slice();
    stateCopy[label].state = state;
    this.setState({
      editors: stateCopy
    });
  }

  addInput() {
    const stateCopy = this.state.editors.slice();
    stateCopy.push({
      label: stateCopy.length,
      state: null
    });
    this.setState({
      editors: stateCopy
    });
  }
  render() {
    const stateCopy = this.state.editors.slice();
    const editors = stateCopy.map(e => {
      return (
        <MyEditor key={e.label} label={e.label} onChange={this.editorChanged} />
      );
    });
    return (
      <div className="App">
        <button onClick={this.addInput}>Add input</button>
        {editors}
      </div>
    );
  }
}

export default App;
