import React, { Component } from "react";
import { Editor, EditorState, RichUtils } from "draft-js";

class MyEditor extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    // this.state = {
    //   editorState: EditorState.createEmpty()
    // };
    //this.onChange = editorState => this.setState({ editorState });
  }
  _onBoldClick() {
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, "BOLD"));
  }
  onChange() {
    this.props.onChange(this.props.editorState);
  }
  render() {
    return (
      <div className="MyEditor">
        <button onClick={this._onBoldClick.bind(this)}>Bold</button>
        <Editor editorState={this.props.editorState} onChange={this.onChange} />
      </div>
    );
  }
}

export default MyEditor;
