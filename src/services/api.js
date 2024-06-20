import axios from "axios";

// Global constants
const BASE_URL = import.meta.env.VITE_BASE_URL;

// Get the warehouse list
export async function getWarehouseList() {
    const res = await axios.get(`${BASE_URL}/warehouse`);
    return res.data;
}

// Get the warehouse list
export async function getInventoryList() {
    const res = await axios.get(`${BASE_URL}/inventory`);
    return res.data;
}
