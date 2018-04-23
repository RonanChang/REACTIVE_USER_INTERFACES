import React, { Component } from "react";
import { Editor, EditorState, RichUtils } from "draft-js";

class MyEditor extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.state = {
      editorState: EditorState.createEmpty()
    };
    this.onChange = this.onChange.bind(this);
  }
  _onBoldClick() {
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, "BOLD"));
  }
  onChange(editorState) {
    this.setState({ editorState });
    this.props.onChange(this.props.label, this.state.editorState);
  }
  render() {
    return (
      <div className="MyEditor">
        <button onClick={this._onBoldClick.bind(this)}>Bold</button>
        <Editor
          label={this.props.label}
          editorState={this.state.editorState}
          onChange={this.onChange}
        />
      </div>
    );
  }
}

export default MyEditor;
