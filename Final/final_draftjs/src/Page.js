import React, { Component } from "react";

class Page extends Component {
  render() {
    return (
      <div
        className="Page"
        dangerouslySetInnerHTML={{ __html: this.props.page.content }}
      />
    );
  }
}
export default Page;
