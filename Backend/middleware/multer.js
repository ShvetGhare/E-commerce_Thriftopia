import multer from "multer";
import path from "path";

// Storage middleware
const storage = multer.diskStorage({
  // Destination for storing uploaded files
  destination: function (req, file, callback) {
    // Store files in 'uploads/' directory
    callback(null, "uploads/");
  },

  // Generate file name (with timestamp to avoid collisions)
  filename: function (req, file, callback) {
    const uniqueSuffix = Date.now() + path.extname(file.originalname); // Add timestamp to the filename
    callback(null, file.fieldname + "-" + uniqueSuffix); // Example: 'image-1618913023891.jpg'
  },
});

// File filter to accept only image files (JPEG, PNG, GIF)
const fileFilter = (req, file, callback) => {
  const filetypes = /jpg|jpeg|png|gif/;
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = filetypes.test(file.mimetype);

  if (mimetype && extname) {
    return callback(null, true);
  } else {
    return callback("Error: Only images are allowed!");
  }
};

// Upload middleware
const upload = multer({
  storage: storage, // Set the storage configuration
  fileFilter: fileFilter, // Apply the file filter
  limits: { fileSize: 5 * 1024 * 1024 }, // Optional: set file size limit (5 MB in this case)
});

// Export the upload middleware
export default upload;
