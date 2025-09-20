

// Set the base URL of your backend
const API_BASE_URL = "https://defencsync-backend.onrender.com/api"; // adjust if deployed






import axios from "axios";

// Function to login
export const loginAgency = async (role, password) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/auth/login`, {
      name: role,
      password,
    });
    // return the whole response data (token + agency + users)
    return response.data;
  } catch (error) {
    // Handle server errors or validation errors
    if (error.response && error.response.data) {
      throw new Error(error.response.data.message);
    } else {
      throw new Error("Network error. Please try again.");
    }
  }
};












/**
 * Submit a resource request
 * @param {Object} payload - request form payload
 * @returns {Promise<Object>} response data
 */
export const submitRequest = async (payload) => {
  try {
    const token = localStorage.getItem("token"); // get JWT token
    const res = await axios.post(`${API_BASE_URL}/requests/submit`, payload, {
      headers: {
        "Content-Type": "application/json",
        ...(token && { Authorization: `Bearer ${token}` }), // add auth if token exists
      },
    });
    return res.data;
  } catch (err) {
    console.error("❌ submitRequest error:", err.response || err.message);
    throw err.response?.data || { message: err.message };
  }
};


















// ✅ Fetch request history
export const fetchRequestHistory = async () => {
  try {
    const res = await axios.get(`${API_BASE_URL}/requests/history`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return res.data;
  } catch (err) {
    console.error("❌ fetchRequestHistory error:", err.response?.data || err.message);
    throw err.response?.data || { message: err.message };
  }
};