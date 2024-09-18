const jwt = require("jsonwebtoken");
const secretKey = "u$er$ecret@Key";

function createTokenForUser(user) {
  try {
    const payload = {
      fullName: user.fullName,
      email: user.email,
    };
    const token = jwt.sign(payload, secretKey);
    return token;
  } catch (error) {
    console.log("authorization error: ", error);
    return res.status(500).json({ message: "Internal server error" });
  }
}

function verifyToken(token) {
  try {
    const payload = jwt.verify(token, secretKey);
    return payload;
  } catch (error) {
    console.log("verification error: ", error);
    return res.status(500).json({ message: "Internal server error" });
  }
}

module.exports = { createTokenForUser, verifyToken };
