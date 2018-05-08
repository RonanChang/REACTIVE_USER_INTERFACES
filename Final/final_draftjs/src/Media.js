import React, { Component } from "react";
import Rnd from "react-rnd";

//import onClickOutside from "react-onclickoutside";

class Media extends Component {
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

  // handleClickOutside(evt) {
  //   // ...handling code goes here...
  //   console.log("cilcked outside!");
  //   this.setState({
  //     style: {
  //       backgroundColor: "red"
  //     }
  //   });
  // }

  Delete() {
    this.props.Delete(this.props.type, this.props.label);
  }

  render() {
    const mediaStyle = this.state.show_border
      ? {
          border: "2px dashed black",
          borderRadius: "10px",
          padding: "10px"
        }
      : { border: "none", padding: "10px" };

    let media;
    if (this.props.type === "img") {
      media = (
        <img
          onClick={this.handleClick}
          alt="File not found"
          draggable="false"
          width="100%"
          height="100%"
          src={this.props.src}
          style={mediaStyle}
        />
      );
    } else if (this.props.type === "vid") {
      media = (
        <video
          style={mediaStyle}
          width="100%"
          height="100%"
          controls
          onClick={this.handleClick}
        >
          <source src={this.props.src} />
        </video>
      );
    } else if (this.props.type === "aud") {
      media = (
        <audio
          style={mediaStyle}
          width="100%"
          height="100%"
          controls
          onClick={this.handleClick}
        >
          <source src={this.props.src} />
        </audio>
      );
    }

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
          {media}
          {this.state.visiblility && (
            <button onClick={this.Delete}>Delete</button>
          )}
        </Rnd>
      </div>
    );
  }
}
export default Media;
