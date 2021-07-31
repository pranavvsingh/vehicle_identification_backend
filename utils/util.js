import bcrypt from "bcrypt";
import saltRound from "../utils/constant";

export function getCurrentTime() {
  return Date.now() / 1000;
}

export function encyptPsswd(psswd) {
  const salt = bcrypt.genSalt(saltRound);
  const hashPassword = bcrypt(psswd, salt);
  return hashPassword;
}

export function urlBuilder(req, reportType) {
  let vincode = req.query.vincode;
  let url = "";
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
      let rarType = req.query.rarType;
      url =
        constants.api_url +
        `/photo/${rarType}" +
        "?vincode=" +
        ${vincode} +
        "&api_key=" +
        ${constants.api_key}`;
      break;
    case "checkImage":
      let rarType = req.query.rarType;
      url =
        constants.api_url +
        `/photo/check/${rarType}" +
        "?vincode=" +
        ${vincode} +
        "&api_key=" +
        ${constants.api_key}`;
      break;

    default:
      break;
  }
}
