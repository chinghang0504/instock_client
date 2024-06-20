import './WarehouseList.scss';
import { getWarehouseList, deleteWarehouse } from '../../../services/api.js';
import deleteIcon from '../../../assets/icons/delete_outline-24px.svg';
import editIcon from '../../../assets/icons/edit-24px.svg';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import searchIcon from '../../../assets/icons/search-24px.svg';
import WarehouseDelete from '../../Modal/WarehouseDelete/WarehouseDelete';
import sortIcon from '../../../assets/icons/sort-24px.svg';
import chevronRightIcon from '../../../assets/icons/chevron_right-24px.svg';

function WarehouseList() {
  const [warehouseList, setWarehouseList] = useState([]);
  const searchInputRef = useRef();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentItemId, setCurrentItemId] = useState(null);
  const navigate = useNavigate();


  // Click the search icon
  // The search input will be on focus
  function clickSearchIcon() {
    searchInputRef.current.focus();
  }

  // Click the edit icon
  function clickEditIcon(id) {
    navigate(`/warehouse/edit/${id}`);
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
        <ul className='warehouse-list-list'>
          {warehouseList.map(warehouse => {
            return (
              <li className='warehouse-list-list__item' key={warehouse.id}>
                <div className='warehouse-list-list__container'>
                  <div className='warehouse-list-list__left-container'>
                    <div className='warehouse-list-list__content-container'>
                      <p className='warehouse-list-list__title'>WAREHOUSE</p>
                      <Link className='warehouse-list-list__warehouse-link' to={`/warehouse/${warehouse.id}`}><p className='warehouse-list-list__warehouse-link-description'>{warehouse.warehouse_name}</p><img className='warehouse-list-list__warehouse-link-arrow' src={chevronRightIcon} alt="warehouse details link" /></Link>
                    </div>
                    <div className='warehouse-list-list__content-container'>
                      <p className='warehouse-list-list__title'>ADDRESS</p>
                      <p className='warehouse-list-list__description'>{`${warehouse.address}, ${warehouse.city}, ${warehouse.country}`}</p>
                    </div>
                  </div>
                  <div className='warehouse-list-list__right-container'>
                    <div className='warehouse-list-list__content-container'>
                      <p className='warehouse-list-list__title'>CONTACT NAME</p>
                      <p className='warehouse-list-list__description'>{warehouse.contact_name}</p>
                    </div>
                    <div className='warehouse-list-list__content-container'>
                      <p className='warehouse-list-list__title'>CONTACT INFORMATION</p>
                      <p className='warehouse-list-list__description'>{warehouse.contact_phone}</p>
                      <p className='warehouse-list-list__description'>{warehouse.contact_email}</p>
                    </div>
                  </div>
                </div>
                <div className='warehouse-list-list__action-container'>
                  <img className='warehouse-list-list__delete-icon' src={deleteIcon} alt="delete icon" onClick={() => { clickDeleteIcon(warehouse.id) }} />
                  <img className='warehouse-list-list__edit-icon' src={editIcon} alt="edit icon" onClick={() => { clickEditIcon(warehouse.id) }} />
                </div>
              </li>
            );
          })}
        </ul>
      </div>

        <WarehouseDelete
           isOpen={modalIsOpen}
            onRequestClose={toggleModal}
            onConfirm={() => handleConfirmDelete(currentItemId)}
            warehouseName={warehouseList.find(warehouse => warehouse.id === currentItemId)?.warehouse_name}
        />
    </div>
  );
}

export default WarehouseList
