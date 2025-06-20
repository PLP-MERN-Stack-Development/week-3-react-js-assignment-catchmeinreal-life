import express from 'express';
import cors from 'cors';

import dotenv from 'dotenv';
dotenv.config()

const app = express();

//middlewar
app.use(cors());
app.use(express.json());

// routes
import authRoute from './src/routes/user.Auth.Routes.js'
app.use('/auth', authRoute);


app.listen(process.env.PORT, ()=>{
    console.log(`server running at port : http://localhost:${process.env.PORT}`)
})

