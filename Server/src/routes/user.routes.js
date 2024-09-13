const express = require("express");
const router = express.Router();

const { handleSignup } = require("../controllers/user.controller");

router.get("/", (req, res) => {
  res.console.log("welcome to NEPTURE");
});

router.post("/signup", handleSignup);

module.exports = router;
