const axios = require("axios");
const responseHandler = require("../responseHandler/responseHandler");
const responseBuilder = require("../responseHandler/responseBuilder");

exports.get = async (url, res) => {
  try {
    let response = await axios.get(url);
    if (response) {
      responseHandler.send(res, "success", 200, response.data);
    }else{
      responseBuilder.send(res, "errorcode", 404, "No data found");
    }
  } catch (error) {
    responseHandler.send(res, "errorcode", 500);
  }
};
