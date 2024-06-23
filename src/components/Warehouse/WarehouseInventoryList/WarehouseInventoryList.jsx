import './WarehouseInventoryList.scss';
import sortIcon from '../../../assets/icons/sort-24px.svg';
import { useEffect, useState } from 'react';
import { getWarehouseInventoryList } from '../../../services/api';

function WarehouseInventoryList(props) {
  const id = props.id;
  const [warehouseInventoryList, setWarehouseInventoryList] = useState([]);

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
        <li className='warehouse-inventory-list-bar__item warehouse-inventory-list-bar__item--qty'>QTY <img className='warehouse-inventory-list-bar__sort-icon' src={sortIcon} alt="sorted by qty" onClick={() => clickSortIcon(3)} /></li>
        <li className='warehouse-inventory-list-bar__item warehouse-inventory-list-bar__item--actions'>ACTIONS</li>
      </ul>
    </div>
  )
}

export default WarehouseInventoryList
