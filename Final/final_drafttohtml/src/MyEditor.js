import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Editor, EditorState } from "draft-js";
import { stateToHTML } from "draft-js-export-html";

class MyEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty()
    };

    this.onChange = this.onChange.bind(this);
    this.save = this.save.bind(this);
  }

  onChange(editorState) {
    this.setState({ editorState });
  }

  save() {
    let html = stateToHTML(this.state.editorState.getCurrentContent());
    //console.log(html);
    this.props.onChange(html);
  }
  render() {
    return (
      <div className="MyEditor">
        This is the Editor page
        <Link to="/">Back </Link>
        <Editor editorState={this.state.editorState} onChange={this.onChange} />
        <Link to="/">
          <button onClick={this.save}>save </button>
        </Link>
      </div>
    );
  }
}

export default MyEditor;
