import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import userRouter from "./routes/userRoute.js";
import productRouter from "./routes/productRoute.js";

// App config
const App = express();
const port = process.env.PORT || 7777; // If port available, it will be used; otherwise, 7000 will be used
connectDB();
// For images:
connectCloudinary();

// Middlewares
App.use(express.json());
App.use(cors());

// API endpoints
App.use("/api/user", userRouter);
App.use("/api/product", productRouter);

// Verify if working
App.get("/", (req, res) => {
  res.send("API WORKING");
});

App.listen(port, () => {
  console.log(`Server started on PORT: ${port}`);
});
