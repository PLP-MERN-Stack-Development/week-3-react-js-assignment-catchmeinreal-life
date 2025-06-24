import express from 'express';

const router = express.Router();

import getUserProfile from '../controller/getUserprofile.js';

router.get('/user/:id', getUserProfile);

export default router;

