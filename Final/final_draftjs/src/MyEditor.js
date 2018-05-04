import React, { Component } from "react";
import { Modifier, Editor, EditorState, RichUtils } from "draft-js";
import Modal from "react-modal";
import "./MyEditor.css";
//import FontControls from "./fontBtn.js";
import { stateToHTML } from "draft-js-export-html";
import { Link } from "react-router-dom";

// const rndstyle = {
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
//   border: "solid 1px #ddd",
//   background: "#ff000017",
//   padding: "25px",
//   borderRadius: "10px"
// };
const colorStyles = {
  content: {
    top: "auto",
    left: "50%",
    right: "auto",
    bottom: "-20%",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "950px",
    backgroundColor: "rgb(192, 200, 200)",
    color: "rgb(102,118,118)",
    padding: "50px"
  }
};

class MyEditor extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.state = {
      editorState: EditorState.createEmpty(),
      modalIsOpen: false
    };
    this.onChange = this.onChange.bind(this);
    this.focus = () => this.editor.focus();
    this.toggleColor = toggledColor => this._toggleColor(toggledColor);
    //this.toggleFont = toggledFont => this._toggleFont(toggledFont);
    //this.Delete = this.Delete.bind(this);
    this.saveHtml = this.saveHtml.bind(this);

    //for the modal
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  openModal() {
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
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
    // this.props.onChange(this.props.label, this.state.editorState);
  }

  Delete() {
    this.props.Delete(this.props.label);
  }

  saveHtml() {
    let html = stateToHTML(this.state.editorState.getCurrentContent());
    console.log(html);
    this.props.saveHtml(html);
  }
  render() {
    return (
      <div className="MyEditor">
        <div className="editorTopbar">
          <Link to="/bookpage">
            <img alt="File not found" src="/close.png" />
          </Link>

          <Link to="/bookpage">
            <button onClick={this.saveHtml}>
              <img alt="File not found" src="/save.png" />
            </button>
          </Link>
        </div>

        <div className="editorSidebar">
          <button onClick={this._onBoldClick.bind(this)}>
            <img alt="File not found" src="/bold.png" />
          </button>
          <button onClick={this._onItalicClick.bind(this)}>
            <img alt="File not found" src="/italic.png" />
          </button>
          <button onClick={this._onUnderlineClick.bind(this)}>
            <img alt="File not found" src="/underline.png" />
          </button>

          <button onClick={this.openModal}>
            <img alt="File not found" src="/colors.png" />
          </button>
        </div>

        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={colorStyles}
          contentLabel="colors Modal"
        >
          <button onClick={this.closeModal}>close</button>
          <ColorControls
            editorState={this.state.editorState}
            onToggle={this.toggleColor}
          />
        </Modal>

        {
          // <FontControls
          //   editorState={this.state.editorState}
          //   onToggle={this.toggleFont}
          // />
        }
        <div style={styles.editor} onClick={this.focus}>
          <Editor
            label={this.props.label}
            customStyleMap={colorStyleMap}
            editorState={this.state.editorState}
            onChange={this.onChange}
            ref={ref => (this.editor = ref)}
          />
        </div>
      </div>
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
      <div>
        <span style={style} onMouseDown={this.onToggle}>
          {this.props.label}
        </span>
      </div>
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
    background: "rgb(250,240,242)"
  },
  controls: {
    fontFamily: "'Helvetica', sans-serif",
    fontSize: 14,
    marginBottom: 10,
    userSelect: "none"
  },
  styleButton: {
    color: "#999",
    cursor: "pointer",
    marginRight: 16,
    padding: "2px 0"
  }
};

export default MyEditor;
