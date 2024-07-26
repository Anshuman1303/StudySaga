import mongoose, { Connection } from "mongoose";

let isConnected: Connection | boolean = false;

const connectToDB = async () => {
        if (isConnected) {
                console.log("MongoDB already connected");
                return isConnected;
        }
        try {
                const res = await mongoose.connect(process.env.MONGODB_URI!);
                isConnected = res.connection;
                console.log("MongoDB Connected!");
                return isConnected;
        } catch (error) {
                console.log(error);
        }
};

export default connectToDB;
