import './WarehouseList.scss';
import { getWarehouseList } from '../../../services/api.js';
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
  const navigate = useNavigate();

  // Added by Jonathan For Modal
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentItemId, setCurrentItemId] = useState(null);

  function toggleModal() {
    setModalIsOpen(!modalIsOpen);
  }

  // Click the search icon
  // The search input will be on focus
  function clickSearchIcon() {
    searchInputRef.current.focus();
  }

  // Click the delete icon
  // The delete modal will show on the screen
  function clickDeleteIcon(id) {
    setCurrentItemId(id);
    toggleModal();
  }

  // Added by Jonatan for Modal API CALL
  const handleConfirmDelete = async () => {

    // Refresh the warehouse list
    const warehouseList = await getWarehouseList();
    setWarehouseList(warehouseList);

    toggleModal();
  };

  // Click the edit icon
  function clickEditIcon(id) {
    navigate(`/warehouse/edit/${id}`);
  }

  // Execute once
  useEffect(() => {
    // Load the data
    async function loadData() {
      const warehouseList = await getWarehouseList();
      setWarehouseList(warehouseList);
    }
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
          <li className='warehouse-list-bar__item'>WAREHOUSE <img className='warehouse-list-bar__sort-icon' src={sortIcon} alt="sorted by warehouse" /></li>
          <li className='warehouse-list-bar__item'>ADDRESS <img className='warehouse-list-bar__sort-icon' src={sortIcon} alt="sorted by address" /></li>
          <li className='warehouse-list-bar__item'>CONTACT NAME <img className='warehouse-list-bar__sort-icon' src={sortIcon} alt="sorted by contact name" /></li>
          <li className='warehouse-list-bar__item'>CONTACT <img className='warehouse-list-bar__sort-icon' src={sortIcon} alt="sorted by contact" /></li>
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
                  <img className='warehouse-list__delete-icon' src={deleteIcon} alt="delete icon" onClick={() => {clickDeleteIcon(warehouse.id)}}/>
                  <img className='warehouse-list__edit-icon' src={editIcon} alt="edit icon" onClick={() => {clickEditIcon(warehouse.id)}}/>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <WarehouseDelete
        isOpen={modalIsOpen}
        onRequestClose={toggleModal}
        onConfirm={handleConfirmDelete}
        warehouseName={warehouseList.find(warehouse => warehouse.id === currentItemId)?.warehouse_name}
      />
    </div>
  )
}

export default WarehouseList
