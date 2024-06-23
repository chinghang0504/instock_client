import './WarehouseInventoryList.scss';
import sortIcon from '../../../assets/icons/sort-24px.svg';
import { useEffect, useState } from 'react';
import { getWarehouseInventoryList } from '../../../services/api';
import chevronRightIcon from '../../../assets/icons/chevron_right-24px.svg';
import InStockTag from '../../Tag/InStockTag/InStockTag.jsx';
import OutOfStockTag from '../../Tag/OutOfStockTag/OutOfStockTag.jsx';
import deleteIcon from '../../../assets/icons/delete_outline-24px.svg';
import editIcon from '../../../assets/icons/edit-24px.svg';
import { Link, useNavigate } from 'react-router-dom';

function WarehouseInventoryList(props) {
  const id = props.id;
  const [warehouseInventoryList, setWarehouseInventoryList] = useState([]);
  const navigate = useNavigate();

  // Click the edit icon
  function clickEditIcon(id) {
    navigate(`/inventory/edit/${id}`);
  }
  // Click the delete icon
  // The delete modal will show on the screen
  function clickDeleteIcon(id) {
    // setCurrentItemId(id);
    // toggleModal();
  }

  useEffect(() => {
    async function loadData() {
      const data = await getWarehouseInventoryList(id);
      setWarehouseInventoryList(data);
    }
    loadData();
  })

  // Click the sort icon
  // Input value
  // 0: Inventory Item
  // 1: Category
  // 2: Status
  // 3: Qty
  function clickSortIcon(val) {
    console.log(`The sort icon is clicked: ${val}`);
  }

  return (
    <div className='warehouse-inventory-list'>
      <ul className='warehouse-inventory-list-bar'>
        <li className='warehouse-inventory-list-bar__item warehouse-inventory-list-bar__item--inventory-item'>INVENTORY ITEM <img className='warehouse-inventory-list-bar__sort-icon' src={sortIcon} alt="sorted by inventory item" onClick={() => clickSortIcon(0)} /></li>
        <li className='warehouse-inventory-list-bar__item warehouse-inventory-list-bar__item--category'>CATEGORY <img className='warehouse-inventory-list-bar__sort-icon' src={sortIcon} alt="sorted by category" onClick={() => clickSortIcon(1)} /></li>
        <li className='warehouse-inventory-list-bar__item warehouse-inventory-list-bar__item--status'>STATUS <img className='warehouse-inventory-list-bar__sort-icon' src={sortIcon} alt="sorted by status" onClick={() => clickSortIcon(2)} /></li>
        <li className='warehouse-inventory-list-bar__item warehouse-inventory-list-bar__item--qty'>QUANTITY <img className='warehouse-inventory-list-bar__sort-icon' src={sortIcon} alt="sorted by qty" onClick={() => clickSortIcon(3)} /></li>
        <li className='warehouse-inventory-list-bar__item warehouse-inventory-list-bar__item--actions'>ACTIONS</li>
      </ul>
      <ul className='warehouse-inventory-list-list'>
        {warehouseInventoryList.map(warehouseInventory => {
          return (
            <li className='warehouse-inventory-list-list__item' key={warehouseInventory.id}>
              <div className='warehouse-inventory-list-list__container'>
                <div className='warehouse-inventory-list-list__left-container'>
                    <div className='warehouse-inventory-list-list__content-container warehouse-inventory-list-list__content-container--inventory-item'>
                      <p className='warehouse-inventory-list-list__title'>INVENTORY ITEM</p>
                      <Link className='warehouse-inventory-list-list__inventory-link' to={`/inventory/${warehouseInventory.id}`}><p className='warehouse-inventory-list-list__inventory-link-description'>{warehouseInventory.item_name}</p><img className='warehouse-inventory-list-list__inventory-link-arrow' src={chevronRightIcon} alt="inventory details link" /></Link>
                    </div>
                    <div className='warehouse-inventory-list-list__content-container warehouse-inventory-list-list__content-container--category'>
                      <p className='warehouse-inventory-list-list__title'>CATEGORY</p>
                      <p className='warehouse-inventory-list-list__description'>{warehouseInventory.category}</p>
                    </div>
                  </div>
                  <div className='warehouse-inventory-list-list__right-container'>
                    <div className='warehouse-inventory-list-list__content-container warehouse-inventory-list-list__content-container--status'>
                      <p className='warehouse-inventory-list-list__title'>STATUS</p>
                      <div className='warehouse-inventory-list-list__status'>{warehouseInventory.status === 'In Stock' ? <InStockTag /> : <OutOfStockTag />}</div>
                    </div>
                    <div className='warehouse-inventory-list-list__content-container warehouse-inventory-list-list__content-container--qty'>
                      <p className='warehouse-inventory-list-list__title'>QTY</p>
                      <p className='warehouse-inventory-list-list__description'>{warehouseInventory.quantity}</p>
                    </div>
                  </div>
              </div>
              <div className='warehouse-inventory-list-list__action-container'>
                <img className='warehouse-inventory-list-list__action-icon' src={deleteIcon} alt="delete icon" onClick={() => { clickDeleteIcon(warehouseInventory.id) }} />
                <img className='warehouse-inventory-list-list__action-icon' src={editIcon} alt="edit icon" onClick={() => { clickEditIcon(warehouseInventory.id) }} />
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  )
}

export default WarehouseInventoryList
