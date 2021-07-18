import React from 'react';

import Modal from 'react-bootstrap/Modal';

class SelectedBeast extends React.Component {

  render() {

    return(
      // <div className="selectedBeast">
        // <h2 onClick={this.props.handleShowModal}>About this Beast</h2>
        <Modal show={this.props.showModal}>
          <Modal.Header closeButton={this.props.handleCloseModal}>
          <button onClick={this.props.handleCloseModal}>CLOSE</button>
            <Modal.Title>THIS IS TITLE PRACTICE</Modal.Title>
          </Modal.Header>
          <Modal.Body></Modal.Body>
        </Modal>
      // </div>
    );
  }
}

export default SelectedBeast;