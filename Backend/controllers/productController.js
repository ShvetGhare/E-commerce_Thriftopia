import { v2 as cloudinary } from "cloudinary";
import productModel from "../models/productModel.js";
// Function to add product
const addProduct = async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      category,
      subCategory,
      bestseller,
      trusted,
      date,
      originyear,
      brand,
      color,
      material,
      about,
      rarityLevel,
      condition,
    } = req.body;

    // For single file upload
    const image = req.file; // The single uploaded image

    if (!image) {
      return res
        .status(400)
        .json({ success: false, message: "No image uploaded" });
    }

    // Upload the image to Cloudinary
    const uploadPromise = cloudinary.uploader.upload(image.path, {
      resource_type: "image", // Specify the type of resource (image)
    });

    // Use Promise.all() to wait for the image upload
    const cloudinaryResponse = await Promise.all([uploadPromise]);

    // Get the uploaded image URL
    const imageUrl = cloudinaryResponse[0].secure_url;

    const productData = {
      name,
      description,
      price: Number(price),
      category,
      subCategory,
      bestseller: bestseller === "true" ? true : false,
      trusted: trusted === "true" ? true : false,
      date: Date.now(),
      originyear: Number(originyear),
      brand,
      color,
      material,
      about,
      rarityLevel,
      condition,
      image: imageUrl,
    };

    console.log(productData);

    const product = new productModel(productData);

    await product.save();

    res.json({
      success: true,
      message: "Product added successfully!",
      imageUrl: imageUrl, // Send the image URL back in the response
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

// Function to list product
const listProduct = async (req, res) => {
  try {
    const products = await productModel.find({});
    res.json({ success: true, products });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// Function to remove product
const removeProduct = async (req, res) => {
  try {
    await productModel.findByIdAndDelete(req.body.id);
    res.json({ success: true, message: "Product Removed!" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// Function to single product Info
const singleProductInfo = async (req, res) => {
  try {
    const { productId } = req.body;
    const product = await productModel.findById(productId);
    res.json({ success: true, product });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export { addProduct, listProduct, removeProduct, singleProductInfo };
