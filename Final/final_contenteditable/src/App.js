import React, { Component } from "react";
import "./App.css";
import Input from "./Input";
import Draggable from "react-draggable";

class App extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.addInput = this.addInput.bind(this);
    this.Delete = this.Delete.bind(this);
    this.state = {
      htmls: []
    };
  }

  onChange(label, value) {
    const htmlCopy = this.state.htmls.slice();
    htmlCopy[label].html = value;
    this.setState({
      htmls: htmlCopy
    });
  }

  addInput() {
    const htmlCopy = this.state.htmls.slice();
    htmlCopy.push({
      label: htmlCopy.length,
      html: ""
    });
    this.setState({
      htmls: htmlCopy
    });
  }

  Delete(label) {
    const htmlCopy = this.state.htmls.slice();

    htmlCopy.splice(label, 1);
    this.setState({
      htmls: htmlCopy
    });
  }

  render() {
    const htmlArr = this.state.htmls.slice();
    const Inputs = htmlArr.map(h => {
      return (
        <Input
          key={h.label}
          label={h.label}
          onChange={this.onChange}
          html={h.html}
          Delete={this.Delete}
        />
      );
    });
    return (
      <div className="App">
        <input name="myFile" type="file" />
        <button onClick={this.addInput}> Add Input </button>
        {Inputs}
      </div>
    );
  }
}

export default App;
