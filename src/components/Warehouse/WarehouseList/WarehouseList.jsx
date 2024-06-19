import './WarehouseList.scss';
import { getWarehouseList } from '../../../services/api.js';
import deleteIcon from '../../../assets/icons/delete_outline-24px.svg';
import editIcon from '../../../assets/icons/edit-24px.svg';
import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import searchIcon from '../../../assets/icons/search-24px.svg';

function WarehouseList() {
  const [warehouseList, setWarehouseList] = useState([]);
  const searchInputRef = useRef();

  useEffect(() => {
    // Load the data
    async function loadData() {
      const warehouseList = await getWarehouseList();
      setWarehouseList(warehouseList);
    }
    loadData();
  }, []);

  function clickSearchIcon() {
    searchInputRef.current.focus();
  }

  return (
    <div className='warehouse-list'>
      <div className='warehouse-list__container'>
        <div className='warehouse-list__header'>
          <h1 className='warehouse-list__title'>Warehouses</h1>
          <div className='warehouse-list__action-container'>
            <div className='warehouse-list__search-container'>
              <input className='warehouse-list__search-input' ref={searchInputRef} type="text" placeholder='Search...' />
              <img className='warehouse-list__search-icon' src={searchIcon} alt="search icon" onClick={clickSearchIcon}/>
            </div>
            <Link className='warehouse-list__add-link' to='/warehouse/add'><button className='warehouse-list__add-button'>+ Add New Warehouse</button></Link>
          </div>
        </div>
        <div className='warehouse-list__list'>
          {warehouseList.map(warehouse => {
            return (
              <div className='warehouse-list__item' key={warehouse.id}>
                <p>WAREHOUSE</p>
                <p>{warehouse.warehouse_name}</p>
                <p>ADDRESS</p>
                <p>{warehouse.address}</p>
                <p>CONTACE NAME</p>
                <p>{warehouse.contact_name}</p>
                <p>contact information</p>
                <p>{warehouse.contact_phone}</p>
                <p>{warehouse.contact_email}</p>
                <div>
                  <img src={deleteIcon} alt="delete icon" />
                  <img src={editIcon} alt="edit icon" />
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  )
}

export default WarehouseList
