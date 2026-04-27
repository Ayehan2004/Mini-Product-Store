import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://adorable-cannoli-a6dce0.netlify.app/';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getProducts = () => api.get('/products');
export const addProduct = (product) => api.post('/products', product);
export const deleteProduct = (id) => api.delete(`/products/${id}`);

export default api;
