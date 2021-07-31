const util = require("../utils/util.js");

exports.payment = (req) => {
  const paymentData = {
    Pay_US_Id: req.body.Pay_US_Id,
    Pay_Status: req.body.Pay_Status,
    Pay_Msg: req.body.Pay_Msg,
    Pay_Gateway: req.body.Pay_Gateway,
    Pay_Rep_Buyed: req.body.Pay_Rep_Buyed,
    Pay_Amount: req.body.Pay_Amount,
    Pay_CreatedAt: util.getCurrentTime(),
    Pay_UpdatedAt: util.getCurrentTime(),
  };
  return paymentData;
};
