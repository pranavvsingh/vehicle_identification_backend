const util = require("../utils/util.js");

exports.register = (req) => {
  const userData = {
    US_Email: req.body.US_Email,
    US_Mobile: req.body.US_Mobile,
    US_Psswd: req.body.US_Psswd,
    US_Register_Status: req.body.US_Register_Status,
    US_Country: req.body.US_Country,
    US_CreatedAt: util.getCurrentTime(),
    US_UpdatedAt: util.getCurrentTime(),
  };
  return userData;
};
