import axios from 'axios';

const api = axios.create({
    baseURL: 'exp://192.168.1.37:19000'
});

export default api;