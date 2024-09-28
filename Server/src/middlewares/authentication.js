const { verifyToken } = require("../service/authorization");

function checkForAuthenticatedUser(cookieName) {
  return (req, res, next) => {
    const tokenCookieValue = req.cookies[cookieName];
    if (!tokenCookieValue) {
      return next();
    }
    try {
      const payload = verifyToken(tokenCookieValue);
      req.user = payload;
    } catch (error) {
      console.log("verification error: ", error);
      return res.status(500).json({ message: "Internal server error" });
    }
    return next();
  };
}
module.exports = {
  checkForAuthenticatedUser,
};
