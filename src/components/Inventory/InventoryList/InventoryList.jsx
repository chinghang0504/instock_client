import { useEffect, useRef, useState } from 'react';
import './InventoryList.scss';
import { Link, useNavigate } from 'react-router-dom';
import searchIcon from '../../../assets/icons/search-24px.svg';
import deleteIcon from '../../../assets/icons/delete_outline-24px.svg';
import editIcon from '../../../assets/icons/edit-24px.svg';
import { getInventoryList,deleteInventory,getInventorySearch} from '../../../services/api.js';
import InventoryDelete from '../../Modal/InventoryDelete/InventoryDelete.jsx';

function InventoryList() {
  const [inventoryList, setInventoryList] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentItemId, setCurrentItemId] = useState(null);
  const searchInputRef = useRef();
  const navigate = useNavigate();

  // Click the search icon
  // The search input will be on focus
  function clickSearchIcon() {
    searchInputRef.current.focus();
  }
// Click the edit icon
function clickEditIcon(id) {
  navigate(`/inventory/edit/${id}`);
}
  // Click the delete icon
  // The delete modal will show on the screen
  function clickDeleteIcon(id) {
    setCurrentItemId(id);
    toggleModal();
  }

  function toggleModal() {
    setModalIsOpen(!modalIsOpen);
  }

  const handleConfirmDelete = async () => {
    try {
      if (currentItemId) {
        await deleteInventory(currentItemId);
        await loadData();
        toggleModal();
      } else {
      }
    } catch (error) {
      console.error('Failed to delete inventory:', error);
    }
  };
  //  Load Inventory List && Load Search Results
  const loadData = async (searchTerm = '') => {
    try {
      if (searchTerm.trim() === '') {
        const inventoryList = await getInventoryList();
        setInventoryList(inventoryList);
      } else {
        const filteredInventories = await getInventorySearch(searchTerm);
        setInventoryList(filteredInventories);
      }
    } catch (error) {
      console.error('Error loading data:', error);
    }
  };
  
  // Use useEffect to load data when the component mounts
  useEffect(() => {
    loadData();
  }, []);

  const handleSearchInputChange = (event) => {
    const searchTerm = event.target.value;
    loadData(searchTerm);
  };

  return (
    <div className='inventory-list'>
      <div className='inventory-list__container'>
        <div className='inventory-list__header'>
          <h1 className='inventory-list__title'>inventory</h1>
          <div className='inventory-list__action-container'>
            <div className='inventory-list__search-container'>
              <input className='inventory-list__search-input' ref={searchInputRef} type="text" placeholder='Search...' onChange={handleSearchInputChange} />
              <img className='inventory-list__search-icon' src={searchIcon} alt="search icon" onClick={clickSearchIcon} />
            </div>
            <Link className='inventory-list__add-link' to='/inventory/add'><button className='inventory-list__add-button'>+ Add New Item</button></Link>
          </div>
        </div>
        <div className='inventory-list__list'>
          {inventoryList.map(inventory => {
            return (
              <div className='inventory-list__item' key={inventory.id}>
                <p>INVENTORY ITEM</p>
                <Link to={`/inventory/${inventory.id}`}><p>{inventory.item_name}</p></Link>
                <p>CATEGORY</p>
                <p>{inventory.category}</p>
                <p>STATUS</p>
                <p>{inventory.status}</p>
                <p>QTY</p>
                <p>{inventory.quantity}</p>
                <p>WAREHOUSE</p>
                <Link to={`/warehouse/${inventory.warehouse_id}`}><p>{inventory.warehouse_name}</p></Link>
                <div>
                  <img className='inventory-list__delete-icon' src={deleteIcon} alt="delete icon" onClick={() => { clickDeleteIcon(inventory.id) }} />
                  <img className='inventory-list__edit-icon' src={editIcon} alt="edit icon" onClick={() => { clickEditIcon(inventory.id) }} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <InventoryDelete
           isOpen={modalIsOpen}
            onRequestClose={toggleModal}
            onConfirm={() => handleConfirmDelete(currentItemId)}
            inventoryName={inventoryList.find(inventory => inventory.id === currentItemId)?.item_name}
        />
    </div>
  )
}

export default InventoryList
