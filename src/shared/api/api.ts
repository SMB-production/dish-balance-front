import axios from 'axios';

export const baseAPI = axios.create({
   baseURL: 'http://localhost:5001/api',
});
