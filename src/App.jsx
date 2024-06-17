import { useState } from 'react'
import './App.scss'
import { BrowserRouter, Routes, Route,} from "react-router-dom";
import Warehouse from './pages/Warehouse/Warehouse';
import WarehouseDetails from './pages/WarehouseDetails/WarehouseDetails';
import WarehouseEdit from './pages/WarehouseEdit/WarehouseEdit';
import WarehouseAdd from './pages/WarehouseAdd/WarehouseAdd';
import WarehouseDelete from './pages/WarehouseDelete/WarehouseDelete';
import Inventory from './pages/Inventory/Inventory';
import InventoryEdit from './pages/InventoryEdit/InventoryEdit';
import InventoryAdd from './pages/InventoryAdd/InventoryAdd';
import Item from './pages/Item/Item';
import ItemDetails from './pages/ItemDetails/ItemDetails';
import ItemDelete from './pages/ItemDelete/ItemDelete';

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Warehouse />} />
        <Route path="/warehouse" element={<Warehouse />}>
          <Route path="details" element={<WarehouseDetails />} />
          <Route path="edit" element={<WarehouseEdit />} />
          <Route path="add" element={<WarehouseAdd />} />
          <Route path="delete" element={<WarehouseDelete />} />
        </Route>
        <Route path="/inventory" element={<Inventory />}>
          <Route path="edit" element={<InventoryEdit />} />
          <Route path="add" element={<InventoryAdd />} />
        </Route>
        <Route path="/item" element={<Item />}>
          <Route path="details" element={<ItemDetails />} />
          <Route path="delete" element={<ItemDelete />} />
        </Route>
      </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
