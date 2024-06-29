import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URL}/${DB_NAME}`
    );
    console.log(connectionInstance);
    console.log(
      `MongoDb Connected DG Host: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("MongoBG Connection Error in connecting to database", error);
    process.exit(1);
  }
};

export default connectDB;
