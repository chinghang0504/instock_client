import axios from "axios";

// Global constants
const BASE_URL = import.meta.env.VITE_BASE_URL;

// Get the warehouse list
export async function getWarehouseList() {
    const res = await axios.get(`${BASE_URL}/warehouse`);
    return res.data;
}
// Get the inventory list
export async function getInventoryList() {
    const res = await axios.get(`${BASE_URL}/inventory`);
    return res.data;
}

// Get the inventory
export async function getInventoryEdit(id) {
    const res = await axios.get(`${BASE_URL}/inventory/${id}`);
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
};

// Delete inventory
export async function deleteInventory (currentItemId) {
    try {
        const response = await axios.delete(`${BASE_URL}/inventory/${currentItemId}`);
        return response.data;
    } catch (error) {
        console.error('Error deleting inventory:', error);
        throw error;
    }
};

// Get warehouse search
export async function getWarehouseSearch(searchTerm = '') {
    const res = await axios.get(`${BASE_URL}/warehouse/search`, {
        params: { s: searchTerm }
    });
    return res.data;
};

// Get inventory search 
export async function getInventorySearch(searchTerm = '') {
    const res = await axios.get(`${BASE_URL}/inventory/search`, {
         params: { s: searchTerm }
    });
    return res.data;
 };