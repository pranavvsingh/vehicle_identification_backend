const axios = require("axios");

exports.get = async (url) => {
  return await axios.get(url);
};
