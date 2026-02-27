import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async() => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        // Await works like promise; wait until this promise is full filled
        // mongoose.connect gives connection object
        console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
        console.log("URI:", process.env.MONGODB_URI)
        
    } catch (error) {
        console.log("MONGODB connection error", error);
        // Node gives access to its built in method called process. Overhere we are simply exiting the process
        process.exit(1)
    }
}

export default connectDB
