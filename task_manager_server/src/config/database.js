import mongoose from 'mongoose';

const connectDB = async () => {

    try {
        await mongoose.connect(process.env.MONGO_URI);

        console.log('Connection was a success');
    } catch (error) {
        console.error(error.message);
        process.exit(1);
    }
    
}

export default connectDB;