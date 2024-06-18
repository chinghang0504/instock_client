import './App.scss'
import { BrowserRouter, Routes, Route, Navigate, } from "react-router-dom";
import Warehouse from './pages/Warehouse/Warehouse';
import WarehouseDetails from './components/WarehouseDetails/WarehouseDetails';
// import WarehouseEdit from './pages/WarehouseEdit/WarehouseEdit';
// import WarehouseAdd from './pages/WarehouseAdd/WarehouseAdd';
// import WarehouseDelete from './pages/WarehouseDelete/WarehouseDelete';
// import Inventory from './pages/Inventory/Inventory';
// import InventoryEdit from './pages/InventoryEdit/InventoryEdit';
// import InventoryAdd from './pages/InventoryAdd/InventoryAdd';
// import Item from './pages/Item/Item';
// import ItemDetails from './pages/ItemDetails/ItemDetails';
// import ItemDelete from './pages/ItemDelete/ItemDelete';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import WarehouseList from './components/WarehouseList/WarehouseList';

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
          </Route>
          {/* <Route path="/warehouse/edit" element={<WarehouseEdit />} />
          <Route path="/warehouse/add" element={<WarehouseAdd />} />
          <Route path="/warehouse/delete" element={<WarehouseDelete />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/inventory/edit" element={<InventoryEdit />} />
          <Route path="/inventory/add" element={<InventoryAdd />} />
          <Route path="/item" element={<Item />} />
          <Route path="/item/details" element={<ItemDetails />} />
          <Route path="/item/delete" element={<ItemDelete />} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
