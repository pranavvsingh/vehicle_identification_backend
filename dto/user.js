const util = require("../utils/util.js");
const { encyptPsswd } = require("../utils/util");
const responseHandler = require("../responseHandler/responseHandler");
const responseBuilder = require("../responseHandler/responseBuilder.js");
const { getUsersFromJwt } = require("../utils/util");

exports.validateUser = async (req, res) => {
  const userData = {
    US_Email: req.body.US_Email,
    US_Register_Status: parseInt(req.body.US_Register_Status),
    US_CreatedAt: util.getCurrentTime(),
    US_UpdatedAt: util.getCurrentTime(),
  };
  if (req.body.US_Psswd) {
    psswd = await encyptPsswd(req.body.US_Psswd);
    userData["US_Psswd"] = psswd;
  }
  return userData;
};

exports.validateUserInfo = async (req, res) => {
  const user = await getUsersFromJwt(req, res);
  const userData = {
    UI_CreatedAt: util.getCurrentTime(),
    UI_UpdatedAt: util.getCurrentTime(),
    UI_Mobile: req.body.UI_Mobile,
    id: user.data.id,
  };

  if (user.data.US_Register_Status == 1) {
    if (req.body.UI_Country == null) {
      responseBuilder.send(
        res,
        "errorcode",
        400,
        "registerd user, country required"
      );
    } else {
      userData["UI_Country"] = req.body.UI_Country;
    }
  } else if (user.data.US_Register_Status == 0) {
    if (req.body.UI_Country != null) {
      responseBuilder.send(
        res,
        "errorcode",
        400,
        "Not registerd user, country not allowed"
      );
    }
  }
  return userData;
};
