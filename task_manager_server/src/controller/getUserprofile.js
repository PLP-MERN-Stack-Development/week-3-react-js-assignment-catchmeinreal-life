


const getUserProfile = (req, res) => {
    const reqData = {...req.params};
    

    res.status(200).json({data: reqData});
}


export default getUserProfile;