// src/axios.js
import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://backend.wawgte.com', // Your backend URL
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true, // Include credentials (cookies, HTTP authentication) in requests
});

export default instance;