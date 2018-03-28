import React, { Component } from "react";

class PersonDetail extends Component {
  render() {
    return (
      <div className="PersonDetail">
        This is the Person Detail {this.props.match.params.id}!
      </div>
    );
  }
}

export default PersonDetail;
