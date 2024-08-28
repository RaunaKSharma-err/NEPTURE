require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const corsOption = {
  origin: ["http://localhost:5173"],
};

// Middlewares
app.use(express.json());
app.use(cors(corsOption));
app.use(express.urlencoded({ extended: true }));

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
