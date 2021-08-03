const jwt = require("jsonwebtoken");
const { getRegisterStatus } = require("../utils/util");

const config = process.env;

const verifyToken = async (req, res, next) => {
  var token = req.body.token || req.query.token || req.headers["authorization"];
  if(token){
  token = token.replace("Bearer ", "");
  }
  const userId = req.query.id || req.body.id;
  const registerStatus = await getRegisterStatus(userId, res);
  if (registerStatus == 1) {
    if (!token) {
      return res
        .status(403)
        .json({ status: 403, message: "Token is require for authentication" });
    }
    try {
      const decoded = jwt.verify(token, config.TOKEN_KEY);
      req.user = decoded;
    } catch (err) {
      return res.status(401).json({ status: 403, message: "invalid token" });
    }
  }
  return next();
};

module.exports = verifyToken;
