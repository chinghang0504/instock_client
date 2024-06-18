import React, { useEffect, useState } from 'react';
import './WarehouseList.scss';
import { getWarehouseList } from '../../services/api';
import deleteIcon from '../../assets/icons/delete_outline-24px.svg';
import editIcon from '../../assets/icons/edit-24px.svg';
import { Link } from 'react-router-dom';

function WarehouseList() {
  const [warehouseList, setWarehouseList] = useState([]);

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
      <Link to="/warehouse/details">Details</Link>
      <div className='warehouse-list__header'>
        <h1 className='warehouse-list__title'>Warehouse</h1>
        <input className='warehouse-list__search-input' type="text" placeholder='Search...' />
        <button className='warehouse-list__add-button'>Add New Warehouse</button>
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
  )
}

export default WarehouseList
