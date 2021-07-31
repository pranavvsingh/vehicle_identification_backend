import { check } from "express-validator";

export function isNumber() {
  return check(field)
    .not()
    .isEmpty()
    .trim()
    .isNumeric()
    .escape()
    .withMessage(field, constants.invalidDataFormat);
}

export function isString() {
  return check(field)
    .not()
    .isEmpty()
    .trim()
    .isString()
    .escape()
    .withMessage(field, constants.invalidDataFormat);
}

export function isJson() {
  return check(field)
    .trim()
    .isJSON()
    .escape()
    .withMessage(field, constants.invalidDataFormat);
}

export function isEmail(field) {
  return check(field)
    .trim()
    .escape()
    .isEmail()
    .normalizeEmail()
    .withMessage(field, constants.invalidDataFormat);
}

export function isPsswd(field) {
  return check(field)
    .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/, "i")
    .withMessage(field, constants.invalidDataFormat);
}

export function isBoolean(field) {
  return check(field)
    .notEmpty()
    .trim()
    .isInt()
    .isLength({ max: 1 })
    .escape()
    .withMessage(field, constants.invalidDataFormat);
}

export function isTimeStamp(field) {
  return check(field)
    .notEmpty()
    .trim()
    .isInt()
    .isLength({ max: 10 })
    .escape()
    .withMessage(field, constants.invalidDataFormat);
}

export function isNotNull(field) {
  return check(field)
    .not()
    .isEmpty()
    .trim()
    .escape()
    .withMessage(field, constants.invalidDataFormat);
}
