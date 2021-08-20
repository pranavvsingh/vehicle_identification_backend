const paymentService  = require("../services/paymentService.js");

exports.setPayment = (req, res, next) => {
  try {
    paymentService.setPayment(req, res);
  } catch (error) {
    next(error);
  }
};

exports.getPayment = (req, res, next) => {
  try {
    paymentService.getPayment(req, res);
  } catch (error) {
    next(error);
  }
};

exports.getPayments = (req, res, next) => {
  try {
    paymentService.getPayments(req, res);
  } catch (error) {
    next(error);
  }
};

exports.reports = (req, res, next) => {
  try {
    paymentService.reports(req, res);
  } catch (error) {
    next(error);
  }
};
