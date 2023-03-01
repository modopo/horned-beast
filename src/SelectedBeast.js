import React from 'react';
import Modal from 'react-bootstrap/Modal';
import './SelectedBeast.css';

class SelectedBeast extends React.Component {

  render() {
    return (
      <Modal show={this.props.showModal} onHide={this.props.closeModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>{this.props.selected.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={this.props.selected.imageUrl} alt={this.props.selected.title}></img>
          <p>{this.props.selected.description}</p>
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
    )
  }
}

export default SelectedBeast;

