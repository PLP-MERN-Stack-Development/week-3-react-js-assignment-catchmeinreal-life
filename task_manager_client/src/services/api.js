import axios from 'axios';

const API = axios.create({
    baseURL: ' http://localhost:5174/'
});

export const userLogin = (data) => API.post('/auth/login', data);
export const userSignup = (data) => API.post('/auth/signup', data);

export const addToDo = (data) => API.post('/tasks', data, {
    headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4NWIzNjMwMGExM2FhNDUyYWExMDgyMyIsImlhdCI6MTc1MDgxMjU4NiwiZXhwIjoxNzUwODk4OTg2fQ.L-sQUQSwJZD1RPQQn_mS-Wof7IZd5aYq-I3MCL36-8Y`
    }
});

export const getTasks = (data) => API.get('/tasks', {
    headers: {  
        // Authorization: `Bearer ${localStorage.getItem('token')}`
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4NWIzNjMwMGExM2FhNDUyYWExMDgyMyIsImlhdCI6MTc1MDgxMjU4NiwiZXhwIjoxNzUwODk4OTg2fQ.L-sQUQSwJZD1RPQQn_mS-Wof7IZd5aYq-I3MCL36-8Y`
    }
}, data);
// "

export const getUserProfile = () => API.get('/profile', {
    headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
    }
});

export const updateUserProfile = (data) => API.put('/profile', data, {
    headers: {  
        Authorization: `Bearer ${localStorage.getItem('token')}`
    }                               
});

export const validate_Token = () => API.get('/validateToken');
