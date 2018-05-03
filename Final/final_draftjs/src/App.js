import React, { Component } from "react";
import MyEditor from "./MyEditor";
import "./App.css";
import Draggable from "react-draggable";
import Rnd from "react-rnd";
const style = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "solid 1px #ddd",
  background: "#f0f0f0"
};
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editors: [],
      imgUrl: [],
      videoUrl: []
    };
    this.editorChanged = this.editorChanged.bind(this);
    this.addInput = this.addInput.bind(this);
    this.Delete = this.Delete.bind(this);
    this.updateLabel = this.updateLabel.bind(this);
    this.imgSelected = this.imgSelected.bind(this);
    this.videoSelected = this.videoSelected.bind(this);
  }

  imgSelected() {
    const file = this.refs.uploadImg.files[0];
    const reader = new FileReader();
    const urlCopy = this.state.imgUrl.slice();

    reader.onloadend = () => {
      urlCopy.push(reader.result);
      this.setState({
        imgUrl: urlCopy
      });
    };
    if (file) {
      reader.readAsDataURL(file);
      urlCopy.push(reader.result);
      this.setState({
        imgUrl: urlCopy
      });
    } else {
      urlCopy.push("");
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
      urlCopy.push(reader.result);
      this.setState({
        videoUrl: urlCopy
      });
    };
    if (file) {
      reader.readAsDataURL(file);
      urlCopy.push(reader.result);
      this.setState({
        videoUrl: urlCopy
      });
    } else {
      urlCopy.push("");
      this.setState({
        videoUrl: urlCopy
      });
    }
  }

  editorChanged(label, state) {
    const stateCopy = this.state.editors.slice();
    stateCopy[label].state = state;
    this.setState({
      editors: stateCopy
    });
  }
  updateLabel() {
    for (let i = 0; i < this.state.editors.length; i++) {
      const each_editor = this.state.editors[i];
      each_editor.label = i;
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

  Delete(label) {
    console.log(label);
    const stateCopy = this.state.editors.slice();
    stateCopy.splice(label, 1);
    this.setState({
      editors: stateCopy
    });
  }
  render() {
    this.updateLabel();
    const stateCopy = this.state.editors.slice();
    const editors = stateCopy.map(e => {
      return (
        <MyEditor
          key={e.label}
          label={e.label}
          onChange={this.editorChanged}
          Delete={this.Delete}
        />
      );
    });

    const urlCopy = this.state.imgUrl.slice();

    const imgs = urlCopy.map((img, i) => {
      if (img !== "") {
        return (
          <Rnd
            default={{
              x: 0,
              y: 0,
              width: 320,
              height: "auto"
            }}
          >
            <img src={img} draggable="false" width="100%" height="100%" />
          </Rnd>
        );
      }
    });

    const videoCopy = this.state.videoUrl.slice();
    //console.log(videoCopy.length);

    const videos = videoCopy.map((video, i) => {
      if (video !== "") {
        return (
          <Rnd
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
      }
    });
    return (
      <div className="App">
        <label htmlFor="uploadImg">
          Upload Image
          <input
            id="uploadImg"
            ref="uploadImg"
            type="file"
            onChange={this.imgSelected}
            style={{ display: "none" }}
          />
        </label>

        <label htmlFor="uploadVideo">
          Upload Video
          <input
            id="uploadVideo"
            ref="uploadVideo"
            type="file"
            onChange={this.videoSelected}
            style={{ display: "none" }}
          />
        </label>

        <br />
        <button onClick={this.addInput}>Add input</button>

        <br />
        {imgs}
        <br />
        {videos}
        <br />
        {editors}
      </div>
    );
  }
}

export default App;
