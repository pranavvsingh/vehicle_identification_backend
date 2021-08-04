const axios = require("axios");

exports.get = async (url) => {
  try {
    let response = await axios.get(url);
    responseHandler.send(res, "success", 200, response.data);
  } catch (error) {
    responseHandler.send(res, "errorcode", 400);
  }
};
