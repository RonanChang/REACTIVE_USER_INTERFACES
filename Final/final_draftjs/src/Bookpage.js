import React, { Component } from "react";
//import MyEditor from "./MyEditor";
import "./Bookpage.css";
//import Draggable from "react-draggable";
//import Rnd from "react-rnd";
import { Link } from "react-router-dom";
import Media from "./Media";
import Textblock from "./Textblock";
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
      htmls: this.props.htmls,
      imgUrl: [],
      videoUrl: [],
      audioUrl: [],
      content: "",
      tile: new Date().toString
    };
    //this.editorChanged = this.editorChanged.bind(this);
    //this.addInput = this.addInput.bind(this);
    this.Delete = this.Delete.bind(this);
    this.updateLabel = this.updateLabel.bind(this);
    this.imgSelected = this.imgSelected.bind(this);
    this.videoSelected = this.videoSelected.bind(this);
    this.audioSelected = this.audioSelected.bind(this);
    this.updateAppHtmls = this.updateAppHtmls.bind(this);
    this.saveContent = this.saveContent.bind(this);
    this.whatIsDeleted = "";
  }

  saveContent() {
    const htmlstring = this.refs.content.outerHTML;
    const start = htmlstring.search("<button>");
    const end = htmlstring.search("</button>") + 8;
    const substr = htmlstring.slice(start, end + 1);
    const new_str = htmlstring.replace(substr, "");
    //console.log(new_str);
    this.props.saveContent(new_str);
    //console.log(this.refs.content.outerHTML);
  }
  // componentDidMount() {
  //   console.log("here");
  //   console.log(this.refs.content.outerHTML);
  // }
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
    } else if (type === "html") {
      stateCopy = this.state.htmls;
    }
    for (let i = 0; i < stateCopy; i++) {
      const _each = stateCopy[i];
      _each.label = i;
    }
  }
  /*
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
*/
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
    } else if (type === "html") {
      stateCopy = this.state.htmls.slice();
      this.whatIsDeleted = type;
      stateCopy.splice(label, 1);

      this.setState({
        htmls: stateCopy
      });
      this.updateAppHtmls(stateCopy);
    }
  }

  updateAppHtmls(htmlsvar) {
    this.props.updateAppHtmls(htmlsvar);
  }

  render() {
    //console.log(this.state.htmls);
    this.updateLabel(this.whatIsDeleted);
    const htmlCopy = this.state.htmls.slice();
    const textBlocks = htmlCopy.map(h => {
      /*
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
      */
      return (
        <Textblock
          key={"html" + h.label}
          type="html"
          label={h.label}
          html={h.html}
          Delete={this.Delete}
        />
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
          <div className="label_container">
            <img
              className="icon icons_for_sidebar"
              alt="File not found"
              src="/wallpaper.png"
            />
            <img
              className="icon icons_for_sidebar"
              alt="File not found"
              src="/sticker.png"
            />
            <img
              className="icon icons_for_sidebar"
              alt="File not found"
              src="/card.png"
            />
            <label htmlFor="uploadImg">
              <img
                className="icon icons_for_sidebar"
                alt="File not found"
                src="/uploadImg.png"
              />
              <input
                id="uploadImg"
                ref="uploadImg"
                type="file"
                onChange={this.imgSelected}
                style={{ display: "none" }}
              />
            </label>

            <label htmlFor="uploadVideo">
              <img
                className="icon icons_for_sidebar"
                alt="File not found"
                src="/uploadVid.png"
              />
              <input
                id="uploadVideo"
                ref="uploadVideo"
                type="file"
                onChange={this.videoSelected}
                style={{ display: "none" }}
              />
            </label>

            <label htmlFor="uploadAudio">
              <img
                className="icon icons_for_sidebar"
                alt="File not found"
                src="/uploadAud.png"
              />
              <input
                id="uploadAudio"
                ref="uploadAudio"
                type="file"
                onChange={this.audioSelected}
                style={{ display: "none" }}
              />
            </label>

            {
              // <button onClick={this.addInput}>
              //   <img src="/addInput.png" />
              // </button>
            }

            <Link to="/editorpage">
              <img
                className="icon icons_for_sidebar"
                alt="File not found"
                src="/addInput.png"
              />
            </Link>
          </div>
        </div>

        <div className="topbar">
          <Link to="/">
            <img
              id="bookpage-return"
              className="icon"
              alt="File not found"
              src="/return.png"
            />
          </Link>

          <Link to="/">
            <button onClick={this.saveContent}>
              <img
                id="bookpage-save"
                className="icon"
                alt="File not found"
                src="/save.png"
              />
            </button>
          </Link>
          <img className="icon" alt="File not found" src="/share.png" />
        </div>

        <div ref="content" className="content">
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
