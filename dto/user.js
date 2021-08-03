const util = require("../utils/util.js");
const { encyptPsswd } = require("../utils/util");
const responseHandler = require("../responseHandler/responseHandler");

exports.register = async (req, res) => {
  const userData = {
    US_Email: req.body.US_Email,
    US_Register_Status: parseInt(req.body.US_Register_Status),
    US_CreatedAt: util.getCurrentTime(),
    US_UpdatedAt: util.getCurrentTime(),
  };

  if (parseInt(req.body.US_Register_Status) === 1) {
    if (req.body.US_Country == null) {
      responseHandler.send(res, "errorcode", 400);
    }
  }

  if (req.body.US_Psswd) {
    psswd = await encyptPsswd(req.body.US_Psswd);
    userData["US_Psswd"] = psswd;
  }

  if (req.body.US_Mobile !== null) {
    userData["US_Mobile"] = parseInt(req.body.US_Mobile);
  }
  if (req.body.US_Country !== null) {
    userData["US_Country"] = req.body.US_Country;
  }

  return userData;
};
