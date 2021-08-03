const { check } = require("express-validator");
const constants = require("../utils/constant");

exports.isNumber = (field) => {
  return check(field).trim().isNumeric().optional({ nullable: true }).escape();
};

exports.isString = (field) => {
  return check(field).trim().isString().optional({ nullable: true, checkFalsy: true }).escape();
};

exports.isJson = (field) => {
  return check(field).trim().isJSON().escape();
};

exports.isEmail = (field) => {
  return check(field).trim().isEmail().normalizeEmail().escape();
};

exports.isPsswd = (field) => {
  return check(field).trim().isStrongPassword().escape();
};

exports.isBoolean = (field) => {
  return check(field).notEmpty().trim().isInt().isLength({ max: 1 }).escape();
};

exports.isTimeStamp = (field) => {
  return check(field).notEmpty().trim().isInt().isLength({ max: 10 }).escape();
};

exports.isNotNull = (field) => {
  return check(field).not().isEmpty().trim().escape();
};
