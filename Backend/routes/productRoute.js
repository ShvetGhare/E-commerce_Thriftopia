import express from "express";
import {
  addProduct,
  removeProduct,
  listProduct,
  singleProductInfo,
} from "../controllers/productController.js";
import upload from "../middleware/multer.js"; // Ensure you're importing it properly

const productRouter = express.Router();

productRouter.post(
  "/add-product",
  upload.single("image"), // Upload a single image
  addProduct
);
productRouter.post("/remove-product", removeProduct);
productRouter.post("/list-product", listProduct);
productRouter.post("/product-info", singleProductInfo);

export default productRouter;
