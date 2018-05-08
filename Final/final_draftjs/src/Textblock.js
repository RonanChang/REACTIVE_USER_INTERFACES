import React, { Component } from "react";
import Rnd from "react-rnd";

class Textblock extends Component {
  constructor(props) {
    super(props);
    this.Delete = this.Delete.bind(this);
    this.state = {
      visiblility: false,
      show_border: false
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
  }

  Delete() {
    this.props.Delete(this.props.type, this.props.label);
  }
  handleClick() {
    //console.log("clicked!");
    if (!this.state.visiblility) {
      // attach/remove event handler
      document.addEventListener("click", this.handleOutsideClick, false);
    } else {
      document.removeEventListener("click", this.handleOutsideClick, false);
    }

    this.setState(prevState => ({
      visiblility: !prevState.visiblility,
      show_border: !prevState.show_border
    }));
  }

  handleOutsideClick(e) {
    // ignore clicks on the component itself
    if (this.node === null || this.node.contains(e.target)) {
      return;
    }

    this.handleClick();
  }

  render() {
    const txtStyle = this.state.show_border
      ? {
          border: "2px dashed black",
          borderRadius: "10px",
          padding: "10px"
        }
      : { border: "none", padding: "10px" };

    return (
      <div
        className="popover-container"
        ref={node => {
          this.node = node;
        }}
      >
        <Rnd
          default={{
            x: 0,
            y: 0,
            width: 320,
            height: "auto"
          }}
        >
          <div
            onClick={this.handleClick}
            style={txtStyle}
            width="100%"
            height="100%"
            dangerouslySetInnerHTML={{ __html: this.props.html }}
          />
          {this.state.visiblility && (
            <button onClick={this.Delete}>Delete</button>
          )}
        </Rnd>
      </div>
    );
  }
}

export default Textblock;
