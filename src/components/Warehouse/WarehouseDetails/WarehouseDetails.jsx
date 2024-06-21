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
      <div className='warehouse-details-container'>
        <div className='warehouse-details-header'>
          <Link to='/warehouse'><img src={arrowBackIcon} alt="Back to warehouse list" /></Link>
          <h1 className='warehouse-details-header__title'>{warehouseData.warehouse_name}</h1>
          <Link to={`/warehouse/edit/${warehouseData.id}`}><img src={editIcon} alt="Edit warehouse details" /></Link>
        </div>
        <div className='warehouse-details-content'>
          <label>WAREHOUSE ADDRESS:</label>
          <p>{`${warehouseData.address}, ${warehouseData.city}, ${warehouseData.country}`}</p>
          <label>CONTACT NAME</label>
          <p>{warehouseData.contact_name}</p>
          <p>{warehouseData.contact_position}</p>
          <label>CONTACT INFORMATION</label>
          <p>{warehouseData.contact_phone}</p>
          <p>{warehouseData.contact_email}</p>
        </div>
        <WarehouseInventoryList />
      </div>
    </div>
  )
}

export default WarehouseDetails
