import './App.scss'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Warehouse from './pages/Warehouse/Warehouse';
import WarehouseList from './components/Warehouse/WarehouseList/WarehouseList';
import WarehouseDetails from './components/Warehouse/WarehouseDetails/WarehouseDetails';
import WarehouseAdd from './components/Warehouse/WarehouseAdd/WarehouseAdd';
import WarehouseEdit from './components/Warehouse/WarehouseEdit/WarehouseEdit';
import Inventory from './pages/Inventory/Inventory';
import InventoryList from './components/Inventory/InventoryList/InventoryList';
import InventoryDetails from './components/Inventory/InventoryDetails/InventoryDetails';
import InventoryAdd from './components/Inventory/InventoryAdd/InventoryAdd';
import InventoryEdit from './components/Inventory/InventoryEdit/InventoryEdit';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to="/warehouse" />} />
          <Route path="/warehouse" element={<Warehouse />}>
            <Route path="" element={<WarehouseList />} />
            <Route path=":id" element={<WarehouseDetails />} />
            <Route path="add" element={<WarehouseAdd />} />
            <Route path="edit/:id" element={<WarehouseEdit />} />
          </Route>
          <Route path="/inventory" element={<Inventory />}>
            <Route path="" element={<InventoryList />} />
            <Route path=":id" element={<InventoryDetails />} />
            <Route path="add" element={<InventoryAdd />} />
            <Route path="edit/:id" element={<InventoryEdit />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
