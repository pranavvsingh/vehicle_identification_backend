

exports.send = (res, type, status, data) => {
  let response = {};
  if (type === "errorcode") {
    response = {
      status: status,
      message: data,
    };
  } else if(type === "success") {
    response = {
      status: status,
      data: JSON.parse(JSON.stringify(data)),
    };
  }
  res.status(status).json(response);
};
