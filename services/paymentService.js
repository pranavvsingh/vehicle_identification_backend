const model = require("../models/model.js");
const payment = require("../dto/payment.js");
const responseHandler = require("../responseHandler/responseHandler");

exports.setPayment = async (req, res) => {
  try {
    const paymentData = await payment.payment(req);
    const dbDetails = {
      data: paymentData,
      table: "Payments",
      idField: "Pay_Id",
    };
    const response = await model.insert(dbDetails, res);
    if (response && response.length > 0) {
      responseHandler.send(res, "success", 200, response);
    } else {
      responseHandler.send(res, "errorcode", 404);
    }
  } catch (error) {
    responseHandler.send(res, "errorcode", 500);
  }
};

exports.getPayment = async (req, res) => {
  try {
    const dbDetails = {
      column: "*",
      condition: {
        id: req.query.id,
      },
      table: "Payments",
    };
    var response = await model.fetch(dbDetails);
    if (response && response.length > 0) {
      responseHandler.send(res, "success", 200, response);
    } else {
      responseHandler.send(res, "errorcode", 404);
    }
  } catch (error) {
    responseHandler.send(res, "errorcode", 500);
  }
};

exports.getPayments = async (req, res) => {
  try {
    const dbDetails = {
      column: "*",
      condition: {},
      table: "Payments",
    };
    var response = await model.fetchAll(dbDetails);
    if (response && response && response.length > 0) {
      responseHandler.send(res, "success", 200, response);
    } else {
      responseHandler.send(res, "errorcode", 404);
    }
  } catch (error) {
    responseHandler.send(res, "errorcode", 500);
  }
};
