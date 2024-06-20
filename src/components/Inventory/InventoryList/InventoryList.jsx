import { useEffect, useRef, useState } from 'react';
import './InventoryList.scss';
import { Link, useNavigate } from 'react-router-dom';
import searchIcon from '../../../assets/icons/search-24px.svg';
import deleteIcon from '../../../assets/icons/delete_outline-24px.svg';
import editIcon from '../../../assets/icons/edit-24px.svg';
import { getInventoryList } from '../../../services/api.js';

function InventoryList() {
  const [inventoryList, setInventoryList] = useState([]);
  const searchInputRef = useRef();
  const navigate = useNavigate();

  // Click the search icon
  // The search input will be on focus
  function clickSearchIcon() {
    searchInputRef.current.focus();
  }

  // Click the delete icon
  // The delete modal will show on the screen
  function clickDeleteIcon(id) {

  }

  // Click the edit icon
  function clickEditIcon(id) {
    navigate(`/inventory/edit/${id}`);
  }

  // Execute once
  useEffect(() => {
    // Load the data
    async function loadData() {
      const inventoryList = await getInventoryList();
      setInventoryList(inventoryList);
    }
    loadData();
  }, []);

  return (
    <div className='inventory-list'>
      <div className='inventory-list__container'>
        <div className='inventory-list__header'>
          <h1 className='inventory-list__title'>inventory</h1>
          <div className='inventory-list__action-container'>
            <div className='inventory-list__search-container'>
              <input className='inventory-list__search-input' ref={searchInputRef} type="text" placeholder='Search...' />
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
    </div>
  )
}

export default InventoryList
