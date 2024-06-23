import './WarehouseDetails.scss';
import WarehouseInventoryList from '../WarehouseInventoryList/WarehouseInventoryList';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getWarehouseData } from '../../../services/api';
import arrowBackIcon from '../../../assets/icons/arrow_back-24px.svg';
import editIcon from '../../../assets/icons/edit-24px.svg';

function WarehouseDetails() {
  const params = useParams();
  const [warehouseData, setWarehouseData] = useState({});

  // Execute once
  useEffect(() => {
    // Load the data
    async function loadData() {
      const data = await getWarehouseData(params.id);
      setWarehouseData(data);
    }
    loadData();
  }, []);

  return (
    <div className='warehouse-details'>
      <div className='warehouse-details__container'>
        <div className='warehouse-details-header'>
          <div className='warehouse-details-header__container'>
            <Link className='warehouse-details-header__arrow-back-link' to='/warehouse'><img className='warehouse-details-header__arrow-back-icon' src={arrowBackIcon} alt="Back to warehouse list" /></Link>
            <h1 className='warehouse-details-header__title'>{warehouseData.warehouse_name}</h1>
          </div>
          <Link className='warehouse-details-header__edit-link' to={`/warehouse/edit/${warehouseData.id}`}><img className='warehouse-details-header__edit-icon' src={editIcon} alt="Edit warehouse details" /><span className='warehouse-details-header__edit-text'>Edit</span></Link>
        </div>
        <div className='warehouse-details-content'>
          <div className='warehouse-details-content__upper-container'>
            <label className='warehouse-details-content__title'>WAREHOUSE ADDRESS:</label>
              <p className='warehouse-details-content__description'>{warehouseData.address}, <br className='warehouse-details-content__address-breaker' />{warehouseData.city}, {warehouseData.country}</p>
          </div>
          <div className='warehouse-details-content__lower-container'>
            <div className='warehouse-details-content__left-container'>
              <label className='warehouse-details-content__title'>CONTACT NAME:</label>
              <p className='warehouse-details-content__description'>{warehouseData.contact_name}</p>
              <p className='warehouse-details-content__description'>{warehouseData.contact_position}</p>
            </div>
            <div className='warehouse-details-content__right-container'>
              <label className='warehouse-details-content__title'>CONTACT INFORMATION:</label>
              <p className='warehouse-details-content__description'>{warehouseData.contact_phone}</p>
              <p className='warehouse-details-content__description'>{warehouseData.contact_email}</p>
            </div>
          </div>
        </div>
        <WarehouseInventoryList id={params.id} />
      </div>
    </div>
  )
}

export default WarehouseDetails
