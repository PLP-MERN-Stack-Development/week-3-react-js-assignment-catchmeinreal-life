import express from 'express';
import cors from 'cors';

import dotenv from 'dotenv';
dotenv.config()

import connectDB from './src/config/database.js' 

const app = express();

//middlewar
app.use(cors());
app.use(express.json());

// routes
import authRoute from './src/routes/user.Auth.Routes.js'
app.use('/auth', authRoute);


import userProfile from './src/routes/user.ProfileRoutes.js'
app.use('/', userProfile);


app.listen(process.env.PORT, async ()=>{
    await connectDB();
    console.log(`server running at port : http://localhost:${process.env.PORT}`)
})

