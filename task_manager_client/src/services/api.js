import axios from 'axios';

const API = axios.create({
    baseURL: ' http://localhost:5174/auth'
});

export const userLogin = (data) => API.post('/login', data);
export const userSignup = () => API.post('/signup');


export const validate_Token = () => API.get('/validateToken');
