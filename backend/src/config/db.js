import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected:", mongoose.connection.host);
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1); // 1 = exit with failure
  }
};

export default connectDB;
