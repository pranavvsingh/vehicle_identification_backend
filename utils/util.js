const bcrypt = require("bcrypt");
const constants = require("../utils/constant");
const model = require("../models/model.js");
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

exports.getColumnValue = (data) => {
  let columns = [];
  let values = [];
  for (var key in data) {
    columns.push(key);
    if (typeof data[key] == "string") {
      values.push(`"${data[key]}"`);
    } else if (typeof data[key] == "number") {
      values.push(data[key]);
    } else if (typeof data[key] == "object") {
      values.push(`'${JSON.stringify(data[key])}'`);
    }
  }
  var response = {
    columns: columns.join(","),
    values: values.join(","),
  };
  return response;
};

exports.createUpdateQuery = (updatedData) => {
  if (updatedData) {
    //where condition query making
    let condition = updatedData.conditions;
    let consant_1 = [];
    for (let key in condition) {
      consant_1.push(`${key}="${condition[key]}"`);
    }
    let whereCondition = consant_1.join(" and ");

    //update condition query making
    let setValue = updatedData.setValue;
    let consant_2 = [];
    for (let key in setValue) {
      consant_2.push(`${key}="${setValue[key]}"`);
    }
    let updateValues = consant_2.join(" , ");

    return {
      whereCondition,
      updateValues,
    };
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
      return (url =
        constants.api_url +
        "/autocheck" +
        "?vincode=" +
        vincode +
        "&api_key=" +
        constants.api_key);
      break;
    case "checkAutoCheck":
      return (url =
        constants.api_url +
        "/autocheck/check" +
        "?vincode=" +
        vincode +
        "&api_key=" +
        constants.api_key);
      break;
    case "carafax":
      return (url =
        constants.api_url +
        "/carfax" +
        "?vincode=" +
        vincode +
        "&api_key=" +
        constants.api_key);
      break;
    case "checkCarafax":
      return (url =
        constants.api_url +
        "/carfax/check" +
        "?vincode=" +
        vincode +
        "&api_key=" +
        constants.api_key);
      break;
    case "image":
      return (url =
        constants.api_url +
        "/photo/" +
        rarType +
        "?vincode=" +
        vincode +
        "&api_key=" +
        constants.api_key);
      break;
    case "checkImage":
      return (url =
        constants.api_url +
        "/photo/check" +
        rarType +
        "?vincode=" +
        vincode +
        "&api_key=" +
        constants.api_key);
      break;
    case "checkBalance":
      return (url =
        constants.api_url +
        "/carfax/balance" +
        "?api_key=" +
        constants.api_key);
      break;

    default:
      break;
  }
};
