import express from 'express';

const router = express.Router()


//post request for getting user email

router.post('/login', (req, res) => {
    
    res.json({message: "yooh wassup"});
})


export default router;