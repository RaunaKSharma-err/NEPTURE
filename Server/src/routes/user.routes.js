const express = require("express");
const router = express.Router();

const { handleSignup, handleLogin } = require("../controllers/user.controller");

router.get("/", (req, res) => {
  res.console.log("welcome to NEPTURE");
});

router.post("/signup", handleSignup);
router.post("/login", handleLogin);

module.exports = router;
