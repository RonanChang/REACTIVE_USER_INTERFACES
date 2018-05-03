import React, { Component } from "react";

class FontButton extends Component {
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
      style = { ...fonts.fontButton, ...fontStyleMap[this.props.style] };
    } else {
      style = fonts.fontButton;
    }
    return (
      <span style={style} onMouseDown={this.onToggle}>
        {this.props.label}
      </span>
    );
  }
}
var FONTS = [];

const FontControls = props => {
  var currentStyle = props.editorState.getCurrentInlineStyle();
  return (
    <div style={fonts.controls}>
      {FONTS.map(type => (
        <FontButton
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

// This object provides the styling information for our custom fonts
// styles.
const fontStyleMap = {
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

const fonts = {
  root: {
    fontSize: 14,
    padding: 20,
    width: 500
  },
  editor: {
    borderTop: "1px solid #ddd",
    cursor: "text",
    fontSize: 16
  },
  controls: {
    fontSize: 14,
    marginBottom: 10,
    userSelect: "none"
  },
  fontButton: {
    color: "#999",
    cursor: "pointer",
    marginRight: 16,
    padding: "2px 0"
  }
};

export default FontControls;
