import { Link, useParams } from 'react-router-dom';
import './InventoryDetails.scss'
import { useEffect, useState } from 'react';
import { getInventoryEdit } from '../../../services/api';
import arrowBackIcon from '../../../assets/icons/arrow_back-24px.svg';
import editIcon from '../../../assets/icons/edit-24px.svg';

function InventoryDetails() {
  const params = useParams();
  const [inventoryData, setInventoryData] = useState({});

  // Execute once
  useEffect(() => {
    async function loadData() {
      const data = await getInventoryEdit(params.id);
      setInventoryData(data);
    }
    loadData();
  }, []);

  return (
    <div className='inventory-details'>
      <div className='inventory-details__container'>
        <div className='inventory-details-header'>
        <div className='inventory-details-header__container'>
            <Link className='inventory-details-header__arrow-back-link' to='/inventory'><img className='inventory-details-header__arrow-back-icon' src={arrowBackIcon} alt="Back to inventory list" /></Link>
            <h1 className='inventory-details-header__title'>{inventoryData.item_name}</h1>
          </div>
          <Link className='inventory-details-header__edit-link' to={`/inventory/edit/${inventoryData.id}`}><img className='inventory-details-header__edit-icon' src={editIcon} alt="Edit inventory details" /><span className='inventory-details-header__edit-text'>Edit</span></Link>
        </div>
        <div className='inventory-details-content'>

        </div>
      </div>
    </div>
  )
}

export default InventoryDetails
