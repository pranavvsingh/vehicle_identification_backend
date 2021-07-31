const model = require("../models/model.js");
const payment = require("../dto/user.js");

exports.setPayment = (req) => {
  try {
    const paymentData = payment.setPaymentData(req);
    const dbDetails = {
      data: paymentData,
      table: "Payments",
    };
    const res = model.insert(dbDetails);
    return res;
  } catch (error) {
    throw error;
  }
};

exports.getPayment = (req) => {
  try {
    const dbDetails = {};
    let res = {};
    if (req.query.id === "*") {
      dbDetails = {
        column: "*",
        condition: {},
        table: "Payments",
      };
      res = model.fetchAll(dbDetails);
    } else {
      dbDetails = {
        column: "*",
        condition: {
          Pay_US_Id: req.query.id,
        },
        table: "Payments",
      };
      res = model.fetch(dbDetails);
    }
    return res;
  } catch (error) {
    throw error;
  }
};
