import './InventoryDelete.scss';
import Modal from 'react-modal';
import CloseIcon from '../../../assets/icons/close-24px.svg';

Modal.setAppElement('#root');

function InventoryDelete({ isOpen, onRequestClose, onConfirm }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Inventory Item Delete Confirmation"
      className="modal"
      overlayClassName="overlay"
    >
      <img classNametext='text__icon'src={CloseIcon} alt="Close icon " onClick={onRequestClose}/>
      <h2 className='text__header'>Delete {} inventory item?</h2>
      <p className='text__para'>Please confirm that you'de like to delete the {} from the inventory list. You won't be able to undo this action.</p>
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

export default InventoryDelete;
