import axios from "axios";

// Global constants
const BASE_URL = import.meta.env.VITE_BASE_URL;


// ------------WAREHOUSE

// Get the warehouse list
export async function getWarehouseList(sort_by, order_by) {
    if (!sort_by) {
        const res = await axios.get(`${BASE_URL}/warehouse`);
        return res.data;
    }
    
    const res = await axios.get(`${BASE_URL}/warehouse?sort_by=${sort_by}&order_by=${order_by}`);
    return res.data;
}

// Get the warehouse data
export async function getWarehouseData(id) {
    const res = await axios.get(`${BASE_URL}/warehouse/${id}`);
    return res.data;
}

// Get the warehouse inventory list
export async function getWarehouseInventoryList(id, sort_by, order_by) {
    if (!sort_by) {
        const res = await axios.get(`${BASE_URL}/warehouse/${id}/inventories`);
        return res.data;
    }
    
    const res = await axios.get(`${BASE_URL}/warehouse/${id}/inventories?sort_by=${sort_by}&order_by=${order_by}`);
    return res.data;
}

// Delete warehouse 
export async function deleteWarehouse (currentItemId) {
    try {
        const response = await axios.delete(`${BASE_URL}/warehouse/${currentItemId}`);
        return response.data;
    } catch (error) {
        console.error('Error deleting warehouse:', error);
        throw error;
    }
}

// Get warehouse search
export async function getWarehouseSearch(searchTerm = '') {
    const res = await axios.get(`${BASE_URL}/warehouse/search`, {
        params: { s: searchTerm }
    });
    return res.data;
}

//--------------INVENTORY

 // Get the inventory list
export async function getInventoryList(sort_by, order_by) {
    if (!sort_by) {
        const res = await axios.get(`${BASE_URL}/inventory`);
        return res.data;
    }
    
    const res = await axios.get(`${BASE_URL}/inventory?sort_by=${sort_by}&order_by=${order_by}`);
    return res.data;
}

// Get the inventory
export async function getInventoryEdit(id) {
    const res = await axios.get(`${BASE_URL}/inventory/${id}`);
    return res.data;
}

// Delete inventory
export async function deleteInventory(currentItemId) {
    try {
        const response = await axios.delete(`${BASE_URL}/inventory/${currentItemId}`);
        return response.data;
    } catch (error) {
        console.error('Error deleting inventory:', error);
        throw error;
    }
}

//Create inventory 
export async function createInventory (requestData) {
    try{
        const response = await axios.post (`${BASE_URL}/inventory`, requestData)
        return response.data;
    } catch (error){
        console.error('Error creating inventory:', error);
        throw error;
    }
}

// Get inventory search 
export async function getInventorySearch(searchTerm = '') {
    const res = await axios.get(`${BASE_URL}/inventory/search`, {
        params: { s: searchTerm }
    });
    return res.data;
 }
