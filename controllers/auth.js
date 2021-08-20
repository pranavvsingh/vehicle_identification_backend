const authService = require("../services/authService.js");

exports.register = (req, res, next) => {
  try {
    authService.register(req, res);
  } catch (error) {
    res.status(400).json({ status: 400, message: error });
  }
};

exports.updateUserInfo = (req, res, next) => {
  try {
    authService.updateUserInfo(req, res);
  } catch (error) {
    res.status(400).json({ status: 400, message: error });
  }
};

exports.login = (req, res, next) => {
  try {
    authService.login(req, res);
  } catch (error) {
    res.status(400).json({ status: 400, message: error });
  }
};

exports.getUser = (req, res, next) => {
  try {
    authService.getUser(req, res);
  } catch (error) {
    res.status(400).json({ status: 400, message: error });
  }
};

exports.getUsers = (req, res, next) => {
  try {
    authService.getUsers(req, res);
  } catch (error) {
    res.status(400).json({ status: 400, message: error });
  }
};
