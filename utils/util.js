const bcrypt = require("bcrypt");
const constants = require("../utils/constant");
const model = require("../models/model.js");
const { nextTick } = require("process");
const responseHandler = require("../responseHandler/responseHandler");
var randomstring = require("randomstring");
const config = process.env;
const jwt = require("jsonwebtoken");

exports.getCurrentTime = () => {
  const currentTime = Math.floor(Date.now() / 1000);
  return currentTime;
};

exports.encyptPsswd = async (psswd) => {
  try {
    const salt = await bcrypt.genSalt(constants.saltRounds);
    const hashPassword = await bcrypt.hash(psswd, salt);
    return hashPassword;
  } catch (error) {
    throw error;
  }
};

exports.randomeGenerated = (length) => {
  return randomstring.generate(length);
};

exports.comparePsswd = async (psswd, psswdHash) => {
  try {
    const res = await bcrypt.compare(psswdHash, psswd);
    return res;
  } catch (error) {
    throw error;
  }
};

exports.getUsersFromJwt = async (req, res, next) => {
  try {
    let decoded = {};
    let token =
      req.body.token || req.query.token || req.headers["authorization"];
    if (token) {
      token = token.replace("Bearer ", "");
      decoded = jwt.verify(token, config.TOKEN_KEY);
    }
    return decoded;
  } catch (error) {
    throw error;
  }
};

exports.getRegisterStatus = async (userId, res) => {
  try {
    const dbDetails = {
      column: ["US_Register_Status"],
      condition: {
        id: userId,
      },
      table: "Users",
    };
    var response = await model.fetch(dbDetails, res);
    if (response && response.length > 0) {
      return response[0]["US_Register_Status"];
    }
  } catch (error) {
    throw error;
  }
};

exports.urlBuilder = (req, reportType) => {
  let vincode = req.query.vincode;
  let url = "";
  let rarType = req.query.rarType;
  switch (reportType) {
    case "autoCheck":
      url =
        constants.api_url +
        "/autocheck" +
        "?vincode=" +
        vincode +
        "&api_key=" +
        constants.api_key;
      break;
    case "checkAutoCheck":
      url =
        constants.api_url +
        "/autocheck/check" +
        "?vincode=" +
        vincode +
        "&api_key=" +
        constants.api_key;
      break;
    case "carafax":
      url =
        constants.api_url +
        "/carfax" +
        "?vincode=" +
        vincode +
        "&api_key=" +
        constants.api_key;
      break;
    case "checkCarafax":
      url =
        constants.api_url +
        "/carfax/check" +
        "?vincode=" +
        vincode +
        "&api_key=" +
        constants.api_key;
      break;
    case "image":
      url =
        constants.api_url +
        `/photo/${rarType}" +
        "?vincode=" +
        ${vincode} +
        "&api_key=" +
        ${constants.api_key}`;
      break;
    case "checkImage":
      url =
        constants.api_url +
        `/photo/check/${rarType}" +
        "?vincode=" +
        ${vincode} +
        "&api_key=" +
        ${constants.api_key}`;
      break;
    case "checkBalance":
      url =
        constants.api_url + "/carfax/balance" + "?api_key=" + constants.api_key;
      break;

    default:
      break;
  }
};
