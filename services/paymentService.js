const model = require("../models/model.js");
const payment = require("../dto/payment.js");
const responseHandler = require("../responseHandler/responseHandler");
const responseBuilder = require("../responseHandler/responseBuilder");
const { getCurrentTime, getUsersFromJwt } = require("../utils/util");

exports.setPayment = async (req, res) => {
  try {
    const paymentData = await payment.validatePayment(req, res);
    const dbDetails = {
      data: paymentData,
      table: "Payments",
      idField: "Pay_Id",
      updateData: {
        table: "Payments",
        conditions: {
          id: paymentData.id,
        },
        setValue: {
          Pay_Archieve: 1,
          Pay_UpdatedAt: getCurrentTime(),
        },
      },
    };
    const response = await model.insert(dbDetails, res);
    if (response && response.length > 0) {
      responseHandler.send(res, "success", 200, response[0]);
    } else {
      responseHandler.send(res, "errorcode", 404);
    }
  } catch (error) {
    responseBuilder.send(res, "errorcode", 500, error);
  }
};

exports.getPayment = async (req, res) => {
  try {
    const user = await getUsersFromJwt(req, res);
    const dbDetails = {
      column: "*",
      condition: {
        id: user && user.data ? user.data.id : req.query.id,
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
    responseBuilder.send(res, "errorcode", 500, error);
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
    responseBuilder.send(res, "errorcode", 500, error);
  }
};

exports.reports = async (req, res) => {
  try {
    const dbDetails = {
      column: "*",
      condition: {},
      table: "Reports",
    };
    var response = await model.fetchAll(dbDetails);
    if (response && response && response.length > 0) {
      responseHandler.send(res, "success", 200, response);
    } else {
      responseHandler.send(res, "errorcode", 404);
    }
  } catch (error) {
    responseBuilder.send(res, "errorcode", 500, error);
  }
};
