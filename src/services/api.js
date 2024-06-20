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

