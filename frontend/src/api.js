import axios from 'axios';

const api = axios.create({
  baseURL: '/api', // Update with your backend URL
});

export default api;
