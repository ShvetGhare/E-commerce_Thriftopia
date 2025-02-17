import mongoose from "mongoose";

const connectDB = async () => {
  try {
    // No need for useNewUrlParser or useUnifiedTopology in MongoDB Driver v4.0+
    await mongoose.connect(process.env.MONGODB_URL, {
      // Removed deprecated options
    });
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1); // Exit the process with failure
  }
};

export default connectDB;
