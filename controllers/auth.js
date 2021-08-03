const authService = require("../services/authService.js");
const responseHandler = require("../responseHandler/responseHandler");

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

exports.getUsers = (req, res, next) => {
  try {
    authService.getUsers(req, res);
  } catch (error) {
    next(error);
  }
};
