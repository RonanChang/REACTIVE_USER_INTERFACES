import React, { Component } from "react";
import Modal from "react-modal";

class MyModal extends Component {
  render() {
    return (
      <div className="MyModal">
        <button onClick={this.openModal}>
          <img src={this.props.imgsrc} height="28px" />
        </button>
        <Modal
          isOpen={this.props.isModalOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={this.props.style}
          contentLabel="Add new contact"
        >
          <h3 ref={subtitle => (this.subtitle = subtitle)}>Add new contact</h3>
          <button onClick={this.closeModal}>close</button>
          <AddNew addNew={this.addNew} />
        </Modal>
      </div>
    );
  }
}

export default MyModal;
