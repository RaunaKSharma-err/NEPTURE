const bcrypt = require("bcrypt");
const { createTokenForUser } = require("../service/authorization");
const User = require("../models/user.model");

async function handleSignup(req, res) {
  try {
    const { fullName, email, password } = req.body;
    if (!fullName || !email || !password)
      return console.log("all feild required");
    const CheckForUser = await User.findOne({ email });
    if (CheckForUser) {
      return res.status(400).json({ message: "User already exists" });
    }
    const hashedPass = await bcrypt.hash(password, 10);
    await User.create({
      fullName,
      email,
      password: hashedPass,
    });
    res.status(201).json({ message: "user created successfully" });
  } catch (error) {
    console.log("error: ", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

const handleLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    try {
      if (user) {
        const ismatched = await bcrypt.compare(password, user.password);
        if (ismatched) {
          createTokenForUser(user);
          const userData = {
            fullName: user.fullName,
            email: user.email,
          };
          res
            .status(200)
            .json({ message: "User login successfull", user: userData });
        }
      }
    } catch (error) {
      res.status(401).json({ message: "Incorret credentials!" });
    }
  } catch (error) {
    console.log("login error: ", error);
    return res.status(404).json({ message: "User not found!" });
  }
};

module.exports = { handleSignup, handleLogin };
