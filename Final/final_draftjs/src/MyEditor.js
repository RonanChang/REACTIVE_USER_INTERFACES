import React, { Component } from "react";
import { Modifier, Editor, EditorState, RichUtils } from "draft-js";
import Draggable from "react-draggable";
import "./MyEditor.css";
//import FontControls from "./fontBtn.js";
import Rnd from "react-rnd";

const rndstyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "solid 1px #ddd",
  background: "#ff000017",
  padding: "25px",
  borderRadius: "10px"
};
class MyEditor extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.state = {
      editorState: EditorState.createEmpty()
    };
    this.onChange = this.onChange.bind(this);
    this.focus = () => this.editor.focus();
    this.toggleColor = toggledColor => this._toggleColor(toggledColor);
    //this.toggleFont = toggledFont => this._toggleFont(toggledFont);
    this.Delete = this.Delete.bind(this);
  }
  _toggleColor(toggledColor) {
    const { editorState } = this.state;
    const selection = editorState.getSelection();
    // Let's just allow one color at a time. Turn off all active colors.
    const nextContentState = Object.keys(colorStyleMap).reduce(
      (contentState, color) => {
        return Modifier.removeInlineStyle(contentState, selection, color);
      },
      editorState.getCurrentContent()
    );
    let nextEditorState = EditorState.push(
      editorState,
      nextContentState,
      "change-inline-style"
    );
    const currentStyle = editorState.getCurrentInlineStyle();
    // Unset style override for current color.
    if (selection.isCollapsed()) {
      nextEditorState = currentStyle.reduce((state, color) => {
        return RichUtils.toggleInlineStyle(state, color);
      }, nextEditorState);
    }
    // If the color is being toggled on, apply it.
    if (!currentStyle.has(toggledColor)) {
      nextEditorState = RichUtils.toggleInlineStyle(
        nextEditorState,
        toggledColor
      );
    }
    this.onChange(nextEditorState);
  }
  // _toggleFont(toggledFont) {
  //   const { editorState } = this.state;
  //   const selection = editorState.getSelection();
  //   // Let's just allow one color at a time. Turn off all active colors.
  //   const nextContentState = Object.keys(fontStyleMap).reduce(
  //     (contentState, font) => {
  //       return Modifier.removeInlineStyle(contentState, selection, font);
  //     },
  //     editorState.getCurrentContent()
  //   );
  //   let nextEditorState = EditorState.push(
  //     editorState,
  //     nextContentState,
  //     "change-inline-style"
  //   );
  //   const currentStyle = editorState.getCurrentInlineStyle();
  //   // Unset style override for current color.
  //   if (selection.isCollapsed()) {
  //     nextEditorState = currentStyle.reduce((state, font) => {
  //       return RichUtils.toggleInlineStyle(state, font);
  //     }, nextEditorState);
  //   }
  //
  //   if (!currentStyle.has(toggledFont)) {
  //     nextEditorState = RichUtils.toggleInlineStyle(
  //       nextEditorState,
  //       toggledFont
  //     );
  //   }
  //   this.onChange(nextEditorState);
  // }

  _onBoldClick() {
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, "BOLD"));
  }
  _onItalicClick() {
    this.onChange(
      RichUtils.toggleInlineStyle(this.state.editorState, "ITALIC")
    );
  }
  _onUnderlineClick() {
    this.onChange(
      RichUtils.toggleInlineStyle(this.state.editorState, "UNDERLINE")
    );
  }
  onChange(editorState) {
    this.setState({ editorState });
    this.props.onChange(this.props.label, this.state.editorState);
  }

  Delete() {
    this.props.Delete(this.props.label);
  }
  render() {
    return (
      <Rnd
        minWidth="400"
        minHeight="200"
        style={rndstyle}
        cancel=".MyEditor"
        default={{
          x: 0,
          y: 0,
          width: 500
        }}
      >
        <div className="editor-container">
          <button onClick={this._onBoldClick.bind(this)}>Bold</button>
          <button onClick={this._onItalicClick.bind(this)}>Italic</button>
          <button onClick={this._onUnderlineClick.bind(this)}>Underline</button>

          <button onClick={this.Delete}>Delete</button>

          <div style={styles.root}>
            <ColorControls
              editorState={this.state.editorState}
              onToggle={this.toggleColor}
            />

            {
              // <FontControls
              //   editorState={this.state.editorState}
              //   onToggle={this.toggleFont}
              // />
            }
            <div
              className="MyEditor"
              style={styles.editor}
              onClick={this.focus}
            >
              <Editor
                className="not-draggable"
                label={this.props.label}
                customStyleMap={colorStyleMap}
                editorState={this.state.editorState}
                onChange={this.onChange}
                ref={ref => (this.editor = ref)}
              />
            </div>
          </div>
        </div>
      </Rnd>
    );
  }
}

class StyleButton extends React.Component {
  constructor(props) {
    super(props);
    this.onToggle = e => {
      e.preventDefault();
      this.props.onToggle(this.props.style);
    };
  }
  render() {
    let style;
    if (this.props.active) {
      style = { ...styles.styleButton, ...colorStyleMap[this.props.style] };
    } else {
      style = styles.styleButton;
    }
    return (
      <span style={style} onMouseDown={this.onToggle}>
        {this.props.label}
      </span>
    );
  }
}
var COLORS = [
  { label: "Red", style: "red" },
  { label: "Orange", style: "orange" },
  { label: "Yellow", style: "yellow" },
  { label: "Green", style: "green" },
  { label: "Blue", style: "blue" },
  { label: "Indigo", style: "indigo" },
  { label: "Violet", style: "violet" },
  { label: "Times New Roman", style: "TimesNewRoman" },
  { label: "Georgia", style: "Georgia" },
  { label: "Arial", style: "Arial" },
  { label: "Verdana", style: "Verdana" },
  { label: "Courier New", style: "CourierNew" },
  { label: "Lucida Console", style: "LucidaConsole" }
];
const ColorControls = props => {
  var currentStyle = props.editorState.getCurrentInlineStyle();
  return (
    <div style={styles.controls}>
      {COLORS.map(type => (
        <StyleButton
          key={type.label}
          active={currentStyle.has(type.style)}
          label={type.label}
          onToggle={props.onToggle}
          style={type.style}
        />
      ))}
    </div>
  );
};
// This object provides the styling information for our custom color
// styles.
const colorStyleMap = {
  red: {
    color: "rgba(255, 0, 0, 1.0)"
  },
  orange: {
    color: "rgba(255, 127, 0, 1.0)"
  },
  yellow: {
    color: "rgba(180, 180, 0, 1.0)"
  },
  green: {
    color: "rgba(0, 180, 0, 1.0)"
  },
  blue: {
    color: "rgba(0, 0, 255, 1.0)"
  },
  indigo: {
    color: "rgba(75, 0, 130, 1.0)"
  },
  violet: {
    color: "rgba(127, 0, 255, 1.0)"
  },
  TimesNewRoman: {
    fontFamily: "'Times New Roman'"
  },
  Georgia: {
    fontFamily: "'Georgia'"
  },
  LucidaConsole: {
    fontFamily: "'Lucida Console'"
  },
  CourierNew: {
    fontFamily: "'Courier New"
  },
  Arial: {
    fontFamily: "'Arial'"
  }
};
const styles = {
  root: {
    fontFamily: "'Georgia', serif",
    fontSize: 14,
    margin: 20,
    width: "100%"
  },
  editor: {
    borderTop: "1px solid #ddd",
    cursor: "text",
    fontSize: 16,
    width: "100%",
    backgroundColor: "green"
  },
  controls: {
    fontFamily: "'Helvetica', sans-serif",
    fontSize: 14,
    marginBottom: 10,
    userSelect: "none",
    width: "100%"
  },
  styleButton: {
    color: "#999",
    cursor: "pointer",
    marginRight: 16,
    padding: "2px 0"
  }
};

export default MyEditor;
