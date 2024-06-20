
import './WarehouseDelete.scss';
import Modal from 'react-modal';


Modal.setAppElement('#root');

function WarehouseDelete({ isOpen, onRequestClose, onConfirm }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Warehouse Delete Confirmation"
      className="modal"
      overlayClassName="overlay"
    >
      <h2>Confirm Deletion</h2>
      <p>Are you sure you want to delete this warehouse?</p>
      <div className="modal-buttons">
        <button className="cancel-button" onClick={onRequestClose}>Cancel</button>
        <button className="confirm-button" onClick={() => {
          onConfirm();
          onRequestClose();
        }}>Confirm</button>
      </div>
    </Modal>
  );
}


export default WarehouseDelete;
