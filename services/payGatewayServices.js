const ZC = require("zaincash");
const { zainCashData } = require("../dto/zainCashPayment");
const jwt = require("jsonwebtoken");
const config = process.env;

exports.zainCash = async (req, res, next) => {
  try {
    const paymentData = zainCashData(req);
    let zc = new ZC(paymentData);
    const transactionId = await zc.init();
    var data = {};
    if (transactionId) {
      data = zc.pay(transactionId, res);
    }
    res.status(200).json({ status: 200, data: data });
  } catch (error) {
    throw error;
  }
};

exports.redirect = (req, res, next) => {
  const token = req.body.token;
  if (token) {
    var decoded = jwt.verify(token, process.env.secret);
    if (decoded) {
      return res.status(200).json({ status: 200, data: decoded });
    } else {
      return res.status(401).json({ status: 401, message: "invalid token" });
    }
  } else {
    return res
      .status(403)
      .json({ status: 403, message: "Token is require for authentication" });
  }
};
