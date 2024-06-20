import './WarehouseDelete.scss';
import Modal from 'react-modal';
import CloseIcon from '../../../assets/icons/close-24px.svg';


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
      <div className='text'>
      <img className='text__icon'src={CloseIcon} alt="Close icon " onClick={onRequestClose}/>
      <h2 className='text__header'>Delete {} warehouse?</h2>
      <p className='text__para'>Please confirm that you'de like to delete {} from the list of warehouses. You won't be able to undo this action.</p>
      </div>
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
