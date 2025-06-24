import User from '../models/User.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';


const genarateToken = id => jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '1d'});

const loginUser = async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    const isMatch = user && (await bcrypt.compare(password, user.password));
    if (!isMatch ) return res.status(401).json({ message: "Invalid credentials"});
    
    
    res.status(200).json({ token : genarateToken(user._id), user})
	
};

const registerUser = async (req, res) => {

    const { name, email ,password } = req.body;
    
    const userExists = await User.findOne({ email });

    if (userExists) return res.status(400).json({ message: "User already exists"});

    const user  = await User.create({ name, email, password });

    /**user is regestered
     * 
     * verify email
     */


    res.status(200).json({ message: "user Registered"});

    
}

export { loginUser, registerUser };