const { check, validationResult } = require("express-validator");
const constants = require("../utils/constant").default;
import validate from "./validateFields";

exports.vin_val = () => {
  return [validate.isNotNull("vincode")];
};

exports.setPaymentVal = () => {
  return [
    validate.isNumber("Pay_Status"),
    validate.isString("Pay_Msg"),
    validate.isString("Pay_Gateway"),
    validate.isJson("Pay_Rep_Buyed"),
    validate.isNumber("Pay_Amount"),
    validate.isTimeStamp("Pay_CreatedAt"),
    validate.isTimeStamp("Pay_UpdatedAt"),
  ];
};

exports.getPaymentVal = () => {
  return [validate.isNumber("Pay_US_Id")];
};

exports.loginVal = () => {
  return [validate.isEmail("US_Email"), validate.isPsswd("US_Psswd")];
};

exports.getUserVal = () => {
  return [validate.isNumber("US_Id")];
};

exports.registerVal = () => {
  return [
    validate.isEmail("US_Email"),
    validate.isNumber("US_Mobile"),
    validate.isPsswd("US_Psswd"),
    validate.isBoolean("US_Register_Status"),
    validate.isString("US_Country"),
    validate.isTimeStamp("US_CreatedAt"),
    validate.isTimeStamp("US_UpdatedAt"),
  ];
};

exports.validate = (req, res, next) => {
  const errors = validationResult(req);

  if (errors.isEmpty()) {
    return next();
  }
  const extractedErrors = [];
  errors.array().map((err) => extractedErrors.push({ [err.param]: err.msg }));

  return res.status(422).json({
    errors: extractedErrors,
  });
};
