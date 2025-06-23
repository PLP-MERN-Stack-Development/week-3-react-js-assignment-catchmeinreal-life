import axios from 'axios';

const API = axios.create({
    baseURL: ' http://localhost:5174/auth'
});

<<<<<<< HEAD
export const userLogin = () => API.post('/login');
export const userSignup = () => API.post('/signup');


export const validate_Token = () => API.get('/validateToken');
=======
export const userLogin = (data) => API.post('/login', data);
export const userSignup = () => API.post('/signup');
>>>>>>> auth
