const express = require('express');
const path = require('path');
const mime = require('mime-types');
const multer = require('multer');

const app = express();

// Serve static files from the "Upload" directory
app.use(express.static(path.join(__dirname)));

// Configure Multer for file storage
const fileStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Specify the destination directory for uploaded files
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); // Use the original name of the file
  },
});

// Initialize Multer with the configured storage
const upload = multer({ storage: fileStorage });

// **Route to handle the root URL ("/")**
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html')); // Serve the index.html file
});

// File upload route
app.post('/uploads', upload.single('myFile'), (req, res) => {
  console.log(req.file); // Log uploaded file details

  // Set the correct MIME type for the uploaded file
  req.file.mimetype = mime.lookup(req.file.originalname);

  // Send a customized response page to the client
  res.sendFile(path.join(__dirname, 'fileupload.html'));
});

// Route to serve the upload form
app.get('/file-upload', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server and listen on a specified port
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
