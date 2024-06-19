import React, { useState } from 'react';
import './InventoryDelete.scss';
import Modal from 'react-modal';

// Set the app element for accessibility
Modal.setAppElement('#root');

function InventoryDelete() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const toggleModal = () => {
    setModalIsOpen(!modalIsOpen);
  };

  if (modalIsOpen) {
    document.body.classList.add('active-modal');
  } else {
    document.body.classList.remove('active-modal');
  }

  return (
    <div>
      <button onClick={toggleModal}>Delete Inventory</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={toggleModal}
        contentLabel="Inventory Delete Confirmation"
        className="modal"
        overlayClassName="overlay"
      >
        <h2>Confirm Deletion</h2>
        <p>Are you sure you want to delete this inventory item?</p>
        <button onClick={toggleModal}>Cancel</button>
        <button onClick={() => {
          // Add your delete logic here
          toggleModal();
        }}>Confirm</button>
      </Modal>
    </div>
  );
}

export default InventoryDelete;
