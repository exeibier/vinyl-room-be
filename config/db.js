import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({path:'.env'})

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_MONGO);
    } catch (error) {
        console.log('There is an error: ', error);
        process.exit(1); //Stops application
    }
}

export default connectDB;