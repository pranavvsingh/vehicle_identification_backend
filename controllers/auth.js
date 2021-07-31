const authService = require("../services/authService.js");

exports.register = (req, res, next) => {
  try {
    authService.register(req, res);
  } catch (error) {
    next(error);
  }
};

exports.login = (req, res, next) => {
  try {
    authService.login(req, res);
  } catch (error) {
    next(error);
  }
};

exports.getUser = (req, res, next) => {
  try {
    authService.getUser(req, res);
  } catch (error) {
    next(error);
  }
};
