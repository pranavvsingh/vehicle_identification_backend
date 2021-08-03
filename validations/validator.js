const responseHandler = require("../responseHandler/responseHandler");

const { check, validationResult } = require("express-validator");
const {
  isNumber,
  isString,
  isBoolean,
  isPsswd,
  isNotNull,
  isEmail,
} = require("./validateFields.js");

exports.vin_val = () => {
  return [isNotNull("vincode")];
};

exports.setPaymentVal = () => {
  return [
    isNumber("id"),
    isNumber("Pay_Status"),
    isString("Pay_Msg"),
    isString("Pay_Gateway"),
    isString("Pay_Rep_Buyed"),
    isNumber("Pay_Amount"),
  ];
};

exports.getPaymentVal = () => {
  return [isNumber("id")];
};

exports.loginVal = () => {
  return [isEmail("email"), isPsswd("password")];
};

exports.getUserVal = () => {
  return [isNumber("id")];
};

exports.registerVal = () => {
  return [
    isEmail("US_Email"),
    isNumber("US_Mobile"),
    isPsswd("US_Psswd"),
    isBoolean("US_Register_Status"),
    isString("US_Country"),
  ];
};

exports.validate = (req, res, next) => {
  const errors = validationResult(req);

  if (errors.isEmpty()) {
    next();
  }
  const extractedErrors = [];
  errors.array().map((err) => extractedErrors.push({ [err.param]: err.msg }));
  if (extractedErrors.length > 0) {
    responseHandler.send(res, "errorcode", 422);
  }
};
