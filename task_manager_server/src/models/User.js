import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';



const userSchema = new mongoose.Schema({
    name : { type: String, required: true},
    email : { type: String, unique: true},
    password: { type: String, required: true},
    isAdmin: { type: Boolean, default: false},
});

userSchema.pre('save', async function (next) {

    if (!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, 10);

    next();
});

export default mongoose.model('User', userSchema);