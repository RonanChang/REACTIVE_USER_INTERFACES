import React, { Component } from "react";
//import MyEditor from "./MyEditor";
import "./Bookpage.css";
//import Draggable from "react-draggable";
import Rnd from "react-rnd";
import { Link } from "react-router-dom";
import Media from "./Media";
// const style = {
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
//   border: "solid 1px #ddd",
//   background: "#f0f0f0"
// };

class Bookpage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editors: [],
      imgUrl: [],
      videoUrl: [],
      audioUrl: []
    };
    //this.editorChanged = this.editorChanged.bind(this);
    //this.addInput = this.addInput.bind(this);
    this.Delete = this.Delete.bind(this);
    this.updateLabel = this.updateLabel.bind(this);
    this.imgSelected = this.imgSelected.bind(this);
    this.videoSelected = this.videoSelected.bind(this);
    this.audioSelected = this.audioSelected.bind(this);
    this.whatIsDeleted = "";
  }

  imgSelected() {
    const file = this.refs.uploadImg.files[0];
    const reader = new FileReader();
    const urlCopy = this.state.imgUrl.slice();

    reader.onloadend = () => {
      urlCopy.push({
        label: urlCopy.length,
        url: reader.result
      });
      this.setState({
        imgUrl: urlCopy
      });
    };
    if (file) {
      reader.readAsDataURL(file);
      urlCopy.push({
        label: urlCopy.length,
        url: reader.result
      });
      this.setState({
        imgUrl: urlCopy
      });
    } else {
      urlCopy.push({});
      this.setState({
        imgUrl: urlCopy
      });
    }
  }

  videoSelected() {
    const file = this.refs.uploadVideo.files[0];
    const reader = new FileReader();
    const urlCopy = this.state.videoUrl.slice();

    reader.onloadend = () => {
      urlCopy.push({
        label: urlCopy.length,
        url: reader.result
      });
      this.setState({
        videoUrl: urlCopy
      });
    };
    if (file) {
      reader.readAsDataURL(file);
      urlCopy.push({
        label: urlCopy.length,
        url: reader.result
      });
      this.setState({
        videoUrl: urlCopy
      });
    } else {
      urlCopy.push({});
      this.setState({
        videoUrl: urlCopy
      });
    }
  }

  audioSelected() {
    const file = this.refs.uploadAudio.files[0];
    const reader = new FileReader();
    const urlCopy = this.state.audioUrl.slice();

    reader.onloadend = () => {
      urlCopy.push({
        label: urlCopy.length,
        url: reader.result
      });
      this.setState({
        audioUrl: urlCopy
      });
    };
    if (file) {
      reader.readAsDataURL(file);
      urlCopy.push({
        label: urlCopy.length,
        url: reader.result
      });
      this.setState({
        audioUrl: urlCopy
      });
    } else {
      urlCopy.push({});
      this.setState({
        audioUrl: urlCopy
      });
    }
  }
  /*
  editorChanged(label, state) {
    const stateCopy = this.state.editors.slice();
    stateCopy[label].state = state;
    this.setState({
      editors: stateCopy
    });
  }
  */
  updateLabel(type) {
    let stateCopy;
    if (type === "img") {
      stateCopy = this.state.imgUrl;
    } else if (type === "vid") {
      stateCopy = this.state.videoUrl;
    } else if (type === "audio") {
      stateCopy = this.state.audioUrl;
    }
    for (let i = 0; i < stateCopy; i++) {
      const _each = stateCopy[i];
      _each.label = i;
    }
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

  Delete(type, label) {
    //console.log(type, label);
    let stateCopy;
    if (type === "img") {
      stateCopy = this.state.imgUrl.slice();
      this.whatIsDeleted = type;
      stateCopy.splice(label, 1);
      this.setState({
        imgUrl: stateCopy
      });
    } else if (type === "vid") {
      stateCopy = this.state.videoUrl.slice();
      this.whatIsDeleted = type;
      stateCopy.splice(label, 1);
      this.setState({
        videoUrl: stateCopy
      });
    } else if (type === "audio") {
      stateCopy = this.state.audioUrl.slice();
      this.whatIsDeleted = type;
      stateCopy.splice(label, 1);
      this.setState({
        audioUrl: stateCopy
      });
    }
  }
  render() {
    //console.log(this.state.imgUrl);
    this.updateLabel(this.whatIsDeleted);
    const htmlCopy = this.props.html.slice();
    const textBlocks = htmlCopy.map(h => {
      return (
        <Rnd
          key={h.label}
          default={{
            x: 0,
            y: 0,
            width: 320,
            height: "auto"
          }}
        >
          <div dangerouslySetInnerHTML={{ __html: h.html }} />
        </Rnd>
      );
    });

    const urlCopy = this.state.imgUrl.slice();
    const imgs = urlCopy.map(img => {
      if (img.url !== "") {
        /*
        return (
          <Rnd
            key={img.label}
            default={{
              x: 0,
              y: 0,
              width: 320,
              height: "auto"
            }}
          >
            <img
              src={img}
              alt="File not found"
              draggable="false"
              width="100%"
              height="100%"
            />
            <button onClick={this.Delete}>Delete</button>
          </Rnd>
        );
        */

        return (
          <Media
            key={"img" + img.label}
            label={img.label}
            type="img"
            src={img.url}
            Delete={this.Delete}
          />
        );
      }
    });

    const videoCopy = this.state.videoUrl.slice();
    const videos = videoCopy.map(video => {
      if (video.url !== "") {
        /*
        return (
          <Rnd
            key={"vid" + { i }}
            default={{
              x: 0,
              y: 0,
              width: 400,
              height: "auto"
            }}
          >
            <video width="100%" height="100%" controls>
              <source src={video} />
            </video>
          </Rnd>
        );
        */
        return (
          <Media
            key={"video" + video.label}
            label={video.label}
            type="vid"
            src={video.url}
            Delete={this.Delete}
          />
        );
      }
    });

    const audioCopy = this.state.audioUrl.slice();
    const audios = audioCopy.map(audio => {
      if (audio.url !== "") {
        /*
        return (
          <Rnd
            key={"aud" + { i }}
            default={{
              x: 0,
              y: 0,
              width: 400,
              height: "auto"
            }}
          >
            <audio width="100%" height="100%" controls>
              <source src={audio} />
            </audio>
          </Rnd>
        );
        */
        return (
          <Media
            key={"audio" + audio.label}
            label={audio.label}
            type="aud"
            src={audio.url}
            Delete={this.Delete}
          />
        );
      }
    });

    return (
      <div className="Bookpage">
        <div className="sidebar">
          <div className="labels">
            <img className="icon" alt="File not found" src="/wallpaper.png" />
            <img className="icon" alt="File not found" src="/sticker.png" />
            <img className="icon" alt="File not found" src="/card.png" />
            <label htmlFor="uploadImg">
              <img className="icon" alt="File not found" src="/uploadImg.png" />
              <input
                id="uploadImg"
                ref="uploadImg"
                type="file"
                onChange={this.imgSelected}
                style={{ display: "none" }}
              />
            </label>

            <label htmlFor="uploadVideo">
              <img className="icon" alt="File not found" src="/uploadVid.png" />
              <input
                id="uploadVideo"
                ref="uploadVideo"
                type="file"
                onChange={this.videoSelected}
                style={{ display: "none" }}
              />
            </label>

            <label htmlFor="uploadAudio">
              <img className="icon" alt="File not found" src="/uploadAud.png" />
              <input
                id="uploadAudio"
                ref="uploadAudio"
                type="file"
                onChange={this.audioSelected}
                style={{ display: "none" }}
              />
            </label>
          </div>

          {
            // <button onClick={this.addInput}>
            //   <img src="/addInput.png" />
            // </button>
          }

          <Link to="/editorpage">
            <img className="icon" alt="File not found" src="/addInput.png" />
          </Link>
        </div>

        <div className="topbar">
          <Link to="/">
            <img alt="File not found" src="/return.png" />
          </Link>
          <img alt="File not found" src="/save.png" />
          <img alt="File not found" src="/share.png" />
        </div>
        <div className="content">
          <br />
          {imgs}
          <br />
          {videos}
          <br />
          {audios}
          <br />

          {textBlocks}
        </div>
      </div>
    );
  }
}

export default Bookpage;
