require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const corsOption = {
  origin: ["http://localhost:5173"],
};
//mongodb connection
const { connectMongoDB } = require("./src/connections/connection");
connectMongoDB("mongodb://127.0.0.1:27017/Nepture")
  .then(() => console.log("MongoDB connected!"))
  .catch((err) => console.log("MongoDB error", err));

const staticRouter = require("./src/routes/user.routes");
const {
  checkForAuthenticatedUser,
} = require("./src/middlewares/authentication");

// Middlewares
app.use(express.json());
app.use(cors(corsOption));
app.use(express.urlencoded({ extended: true }));
app.use(checkForAuthenticatedUser("token"));

//routes
app.use("/", staticRouter);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
