const mailServices = require("../services/mailServices.js");

exports.sendMail = (req, res, next) => {
  mailServices.sendMail(req, res, next);
};
