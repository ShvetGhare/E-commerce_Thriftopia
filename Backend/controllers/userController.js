import userModel from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import validator from "validator";

// Token creation function
const createToken = (id) => {
  const secretKey = process.env.JWT_SECRET || "default value"; // Default in case .env isn't loading
  console.log("JWT_SECRET:", secretKey); // Log to check the value

  return jwt.sign({ id }, secretKey, { expiresIn: "1d" });
};

// Route for user login!
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // check if email and password exists
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.json({ success: false, message: "User doesn't exists" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (isMatch) {
      const token = createToken(user._id);
      res.json({ success: true, token });
    } else {
      return res.json({ success: false, message: "Incorrect crecidentials" });
    }
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// Route for user registration!
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if the email already exists
    const exists = await userModel.findOne({ email });
    if (exists) {
      return res.json({ success: false, message: "User Already exists!!!" });
    }

    // Validate email and password format
    if (!validator.isEmail(email)) {
      return res.json({
        success: false,
        message: "Please enter a valid Email!!!",
      });
    }
    if (password.length < 8) {
      return res.json({
        success: false,
        message: "Please enter a strong password!!!",
      });
    }

    // Hash the user's password
    const salt = await bcrypt.genSalt(7);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create a new user
    const newUser = new userModel({
      name,
      email,
      password: hashedPassword,
    });

    // Save the user in the database
    const user = await newUser.save();
    console.log("New User Created:", user); // Log the newly created user

    // Generate a token for the user
    const token = createToken(user._id);

    // Log the generated token and user info for debugging
    console.log("Generated Token for User:", token);
    console.log("User ID:", user._id);

    // Respond with the generated token
    res.json({ success: true, token });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// Route for admin login (to be implemented)
const adminLogin = async (req, res) => {
  // To be implemented later
};

export { loginUser, registerUser, adminLogin };
