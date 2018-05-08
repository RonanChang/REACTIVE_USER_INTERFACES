import React, { Component } from "react";
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
//import htmlToDraft from "html-to-draftjs";
import "../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { Link } from "react-router-dom";
import "./MyEditor2.css";

class MyEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty()
    };
    this.saveHtml = this.saveHtml.bind(this);
    this.onEditorStateChange = this.onEditorStateChange.bind(this);
  }

  onEditorStateChange(editorState) {
    this.setState({
      editorState
    });
  }
  saveHtml() {
    let html = draftToHtml(
      convertToRaw(this.state.editorState.getCurrentContent())
    );
    //console.log(html);
    this.props.saveHtml(html);
  }

  render() {
    return (
      <div className="MyEditor">
        <div className="editorTopbar">
          <Link to="/bookpage">
            <img
              id="editor-return"
              className="editorTopbaricon"
              alt="File not found"
              src="/close.png"
            />
          </Link>

          <Link to="/bookpage">
            <button onClick={this.saveHtml}>
              <img
                id="editor-save"
                className="editorTopbaricon"
                alt="File not found"
                src="/save.png"
              />
            </button>
          </Link>
        </div>
        <Editor
          placeholder="Tell a story..."
          editorState={this.state.editorState}
          wrapperClassName="demo-wrapper"
          editorClassName="demo-editor"
          toolbarClassName="demo-toolbar"
          onEditorStateChange={this.onEditorStateChange}
          toolbar={{
            inline: {
              bold: { className: "option-bold" }
            },
            colorPicker: {
              className: "color-picker",
              popupClassName: "demo-popup-custom"
            }
          }}
        />
        {
          // <textarea
          //   disabled
          //   value={draftToHtml(
          //     convertToRaw(this.state.editorState.getCurrentContent())
          //   )}
          // />
        }
      </div>
    );
  }
}
export default MyEditor;
