const { get } = require("../http/http.js");
const { urlBuilder } = require("../utils/util.js");

exports.autoCheck = (req, res) => {
  const url = (urlBuilder(req, "autoCheck"));
  get(url, res);
};

exports.checkAutoCheck = (req, res) => {
  get(urlBuilder(req, "checkAutoCheck"), res);
};

exports.carafax = (req, res) => {
  get(urlBuilder(req, "carafax"), res);
};

exports.checkCarafax = (req, res) => {
  get(urlBuilder(req, "checkCarafax"), res);
};

exports.image = (req, res) => {
  get(urlBuilder(req, "image"), res);
};

exports.checkImage = (req, res) => {
  get(urlBuilder(req, "checkImage"), res);
};

exports.checkBalance = (req, res) => {
  get(urlBuilder(req, "checkBalance"), res);
};
