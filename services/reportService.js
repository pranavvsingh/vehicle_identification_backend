const { get } = require("../http/http.js");
const { urlBuilder } = require("../utils/util.js");

exports.autoCheck = (req, res) => {
  get(urlBuilder(req, "autoCheck"));
};

exports.checkAutoCheck = (req, res) => {
  get(urlBuilder(req, "checkAutoCheck"));
};

exports.carafax = (req, res) => {
  get(urlBuilder(req, "carafax"));
};

exports.checkCarafax = (req, res) => {
  get(urlBuilder(req, "checkCarafax"));
};

exports.image = (req, res) => {
  get(urlBuilder(req, "image"));
};

exports.checkImage = (req, res) => {
  get(urlBuilder(req, "checkImage"));
};

exports.checkBalance = (req, res) => {
  get(urlBuilder(req, "checkBalance"));
};
