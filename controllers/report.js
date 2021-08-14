const reportService = require("../services/reportService.js");

exports.autoCheck = (req, res, next) => {
  try {
    reportService.autoCheck(req, res);
  } catch (error) {
    res.status(400).json({ status: 400, message: error });
  }
};

exports.checkAutoCheck = (req, res, next) => {
  try {
    reportService.checkAutoCheck(req, res);
  } catch (error) {
    res.status(400).json({ status: 400, message: error });
  }
};

exports.carafax = (req, res, next) => {
  try {
    reportService.carafax(req, res);
  } catch (error) {
    res.status(400).json({ status: 400, message: error });
  }
};

exports.checkCarafax = (req, res, next) => {
  try {
    reportService.checkCarafax(req, res);
  } catch (error) {
    res.status(400).json({ status: 400, message: error });
  }
};

exports.image = (req, res, next) => {
  try {
    reportService.image(req, res);
  } catch (error) {
    res.status(400).json({ status: 400, message: error });
  }
};

exports.checkImage = (req, res, next) => {
  try {
    reportService.checkImage(req, res);
  } catch (error) {
    res.status(400).json({ status: 400, message: error });
  }
};

exports.checkBalance = (req, res, next) => {
  try {
    reportService.checkBalance(req, res);
  } catch (error) {
    res.status(400).json({ status: 400, message: error });
  }
};
