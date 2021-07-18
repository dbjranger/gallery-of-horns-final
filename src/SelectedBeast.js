import React from 'react';

import Modal from 'react-bootstrap/Modal';

class SelectedBeast extends React.Component {

  render() {

    return(
        <Modal show={this.props.showModal} onHide={this.props.handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.beast.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body></Modal.Body>
        </Modal>
    );
  }
}

export default SelectedBeast;