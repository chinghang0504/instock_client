import './WarehouseList.scss';
import { getWarehouseList, deleteWarehouse } from '../../../services/api.js';
import deleteIcon from '../../../assets/icons/delete_outline-24px.svg';
import editIcon from '../../../assets/icons/edit-24px.svg';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import searchIcon from '../../../assets/icons/search-24px.svg';
import WarehouseDelete from '../../Modal/WarehouseDelete/WarehouseDelete';
import sortIcon from '../../../assets/icons/sort-24px.svg';

function WarehouseList() {
  const [warehouseList, setWarehouseList] = useState([]);
  const searchInputRef = useRef();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentItemId, setCurrentItemId] = useState(null);
  const navigate = useNavigate();

  // Click the edit icon
  function clickEditIcon(id) {
    navigate(`/warehouse/edit/${id}`);
  }

  // Click the search icon
  // The search input will be on focus
  function clickSearchIcon() {
    searchInputRef.current.focus();
  }

  // Click the delete icon
  // The delete modal will show on the screen
  function clickDeleteIcon(id) {
    console.log("Clicked delete icon with id:", id);
    setCurrentItemId(id);
    toggleModal();
  }

  // Click the sort icon
  // Input value
  // 0: Warehouse
  // 1: Address
  // 2: Contact name
  // 3: contact
  function clickSortIcon(val) {
    console.log(`The sort icon is clicked: ${val}`);
  }

  // Modal Toggle
  function toggleModal() {
    setModalIsOpen(!modalIsOpen);
  }

  // Modal Api for Delete
  const handleConfirmDelete = async () => {
    try {
      if (currentItemId) {
        await deleteWarehouse(currentItemId);
        await loadData();
        toggleModal();
      } else {
      }
    } catch (error) {
      console.error('Failed to delete warehouse:', error);
    }
  };

  // // Execute once
  // useEffect(() => {
  //   // Load the data
  //   async function loadData() {
  //     const warehouseList = await getWarehouseList();
  //     setWarehouseList(warehouseList);
  //   }
  //   loadData();
  // }, []);

  // Refractered to have acces to this function in  handleconfirmdelete
  async function loadData() {
    const warehouseList = await getWarehouseList();
    setWarehouseList(warehouseList);
  }

  // Use useEffect to load data when the component mounts
  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className='warehouse-list'>
      <div className='warehouse-list__container'>
        <div className='warehouse-list-header'>
          <h1 className='warehouse-list-header__title'>Warehouses</h1>
          <div className='warehouse-list-header__action-container'>
            <div className='warehouse-list-header__search-container'>
              <input className='warehouse-list-header__search-input' ref={searchInputRef} type="text" placeholder='Search...' />
              <img className='warehouse-list-header__search-icon' src={searchIcon} alt="search icon" onClick={clickSearchIcon} />
            </div>
            <Link className='warehouse-list-header__add-link' to='/warehouse/add'><button className='warehouse-list-header__add-button'>+ Add New Warehouse</button></Link>
          </div>
        </div>
        <ul className='warehouse-list-bar'>
          <li className='warehouse-list-bar__item'>WAREHOUSE <img className='warehouse-list-bar__sort-icon' src={sortIcon} alt="sorted by warehouse" onClick={() => clickSortIcon(0)} /></li>
          <li className='warehouse-list-bar__item'>ADDRESS <img className='warehouse-list-bar__sort-icon' src={sortIcon} alt="sorted by address" onClick={() => clickSortIcon(1)} /></li>
          <li className='warehouse-list-bar__item'>CONTACT NAME <img className='warehouse-list-bar__sort-icon' src={sortIcon} alt="sorted by contact name" onClick={() => clickSortIcon(2)} /></li>
          <li className='warehouse-list-bar__item'>CONTACT <img className='warehouse-list-bar__sort-icon' src={sortIcon} alt="sorted by contact" onClick={() => clickSortIcon(3)} /></li>
          <li className='warehouse-list-bar__item'>ACTIONS</li>
        </ul>
        <div className='warehouse-list__list'>
          {warehouseList.map(warehouse => {
            return (
              <div className='warehouse-list__item' key={warehouse.id}>
                <p>WAREHOUSE</p>
                <Link to={`/warehouse/${warehouse.id}`}><p>{warehouse.warehouse_name}</p></Link>
                <p>ADDRESS</p>
                <p>{warehouse.address}</p>
                <p>CONTACT NAME</p>
                <p>{warehouse.contact_name}</p>
                <p>contact information</p>
                <p>{warehouse.contact_phone}</p>
                <p>{warehouse.contact_email}</p>
                <div>
                  <img className='warehouse-list__delete-icon' src={deleteIcon} alt="delete icon" onClick={() => { clickDeleteIcon(warehouse.id) }} />
                  <img className='warehouse-list__edit-icon' src={editIcon} alt="edit icon" onClick={() => { clickEditIcon(warehouse.id) }} />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <WarehouseDelete
        isOpen={modalIsOpen}
        onRequestClose={toggleModal}
        // onConfirm={handleConfirmDelete(currentItemId)}
        onConfirm={() => handleConfirmDelete(currentItemId)}
        warehouseName={warehouseList.find(warehouse => warehouse.id === currentItemId)?.warehouse_name}
      />
    </div>
  );
}

export default WarehouseList
