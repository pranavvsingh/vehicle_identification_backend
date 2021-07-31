const { check } = require("express-validator");
const constants = require("../utils/constant");

exports.isNumber = (field) => {
  return check(field)
    .optional({nullable: true})
    .not()
    .isEmpty()
    .trim()
    .isNumeric()
    .escape()
    .withMessage(constants.invalidDataFormat);
};

exports.isString = (field) => {
  return check(field)
    .optional({nullable: true})
    .not()
    .isEmpty()
    .trim()
    .isString()
    .escape()
    .withMessage(constants.invalidDataFormat);
};

exports.isJson = (field) => {
  return check(field)
    .trim()
    .isJSON()
    .escape()
    .withMessage(constants.invalidDataFormat);
};

exports.isEmail = (field) => {
  return check(field)
    .trim()
    .escape()
    .isEmail()
    .normalizeEmail()
    .withMessage(constants.invalidDataFormat);
};

exports.isPsswd = (field) => {
  return check(field)
    .isStrongPassword()
    .withMessage(constants.invalidDataFormat);
};

exports.isBoolean = (field) => {
  return check(field)
    .notEmpty()
    .trim()
    .isInt()
    .isLength({ max: 1 })
    .escape()
    .withMessage(constants.invalidDataFormat);
};

exports.isTimeStamp = (field) => {
  return check(field)
    .notEmpty()
    .trim()
    .isInt()
    .isLength({ max: 10 })
    .escape()
    .withMessage(constants.invalidDataFormat);
};

exports.isNotNull = (field) => {
  return check(field)
    .not()
    .isEmpty()
    .trim()
    .escape()
    .withMessage(constants.invalidDataFormat);
};
