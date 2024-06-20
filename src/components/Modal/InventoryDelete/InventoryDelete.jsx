import './InventoryDelete.scss';
import Modal from 'react-modal';
import CloseIcon from '../../../assets/icons/close-24px.svg';

Modal.setAppElement('#root');

function InventoryDelete({ isOpen, onRequestClose, onConfirm, inventoryName }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Inventory Item Delete Confirmation"
      className="modal"
      overlayClassName="modal__overlay"
    >
       <div className='modal__container'>
      <div className='text'>
      <img classNametext='text__icon'src={CloseIcon} alt="Close icon " onClick={onRequestClose}/>
      <h2 className='text__header'>Delete {inventoryName} inventory item?</h2>
      <p className='text__para'>Please confirm that you'de like to delete the {inventoryName} from the inventory list. You won't be able to undo this action.</p>
      </div>
      <div className="modal__buttons-container">
        <button className="modal__buttons modal__buttons--cancel" onClick={onRequestClose}>Cancel</button>
        <button className="modal__buttons modal__buttons--delete" onClick={() => {
          onConfirm();
          onRequestClose();
        }}>Confirm</button>
      </div>
      </div>
    </Modal>
  );
}

export default InventoryDelete;
