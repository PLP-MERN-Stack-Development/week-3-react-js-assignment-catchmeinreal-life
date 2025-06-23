import express from 'express';

const router = express.Router()


//post request for getting user email

router.post('/login', (req, res) => {
    console.log(req.body)

    
    res.json({message: "yooh wassup you wanna login"});
})

router.post('/signup', (req, res) => {
    console.log(req.body);
    res.json({message: 'received await mongoose'})
})
export default router;