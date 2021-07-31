const bcrypt = require("bcrypt");
const { nextTick } = require("process");
const constants = require("../utils/constant");

exports.getCurrentTime = () => {
  const currentTime = Math.floor(Date.now()/1000);
  return currentTime;
};

exports.encyptPsswd = async (psswd) => {
  try {
    const salt = await bcrypt.genSalt(constants.saltRounds);
    const hashPassword = await bcrypt.hash(psswd, salt);
    return hashPassword;
  } catch (error) {
    next(error);
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
