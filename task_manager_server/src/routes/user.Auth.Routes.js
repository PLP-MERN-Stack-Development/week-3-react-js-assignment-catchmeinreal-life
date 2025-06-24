import express from 'express';

const router = express.Router()

import { loginUser, registerUser } from '../controller/userController.js';
//post request for getting user email

router.post('/login', loginUser);

router.post('/signup', registerUser);
export default router;