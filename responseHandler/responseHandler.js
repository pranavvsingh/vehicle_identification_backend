const { getErrorMsg } = require("../utils/httpStatus");

exports.send = (res, type, status, data) => {
  if (type === "errorcode") {
    let response = {
      status: status,
      message: getErrorMsg(status),
    };
    res.status(status).json(response);
  } else {
    let response = {
      status: status,
      data: JSON.stringify(data),
    };
    res.status(errorCode).json(response);
  }
};
