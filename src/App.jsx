import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route,} from "react-router-dom";

function App() {

  return (
    <>
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<Warehouse/>} />
          <Route path="/warehouse/details" element={<WarehouseDetails/>} />
          <Route path="/warehouse/edit" element={<WarehouseEdit/>} />
          <Route path="/warehouse/add" element={<WarehouseAdd/>} />
          <Route path="/warehouse/delete" element={<WarehouseDelete/>} />
          <Route path="/inventory" element={<Inventory/>} />
          <Route path="/inventory/details" element={<ItemDetails/>} />
          <Route path="/inventory/edit" element={<ItemEdit/>} />
          <Route path="/inventory/add" element={<ItemAdd/>} />
          <Route path="/inventory/delete" element={<ItemDelete/>} />
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
