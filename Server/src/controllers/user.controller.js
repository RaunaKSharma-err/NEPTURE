const User = require("../models/user.model");

async function handleSignup(req, res) {
  try {
    const { fullName, email, password } = req.body;
    if (!fullName || !email || !password)
      return console.log("all feild required");
    const CheckForUser = User.findOne({ email });
    if (CheckForUser) {
      return res.status(400).json({ message: "User already exists" });
    }
    await User.create({
      fullName,
      email,
      password,
    });
    console.log("user created successfully");

    res.status(201).json({ message: "user created successfully" });
  } catch (error) {
    console.log("error: ", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

module.exports = { handleSignup };
