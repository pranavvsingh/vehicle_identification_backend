const util = require("../utils/util.js");
const { getUsersFromJwt } = require("../utils/util");

exports.validatePayment = async(req, res) => {
  try {
    const user = await getUsersFromJwt(req, res);
    const paymentData = {
      id: user && user.data ? user.data.id : req.body.id,
      Pay_Status: req.body.Pay_Status,
      Pay_Msg: req.body.Pay_Msg,
      Pay_Gateway: req.body.Pay_Gateway,
      Pay_Rep_Buyed: JSON.parse(
        req.body.Pay_Rep_Buyed.replace(/(&quot\;)/g, '"')
      ),
      Pay_Amount_Dollar: req.body.Pay_Amount_Dollar,
      Pay_Amount_IOD: req.body.Pay_Amount_IOD,
      Pay_Archieve: 0,
      Pay_CreatedAt: util.getCurrentTime(),
      Pay_UpdatedAt: util.getCurrentTime(),
    };
    return paymentData;
  } catch (error) {
    throw error;
  }
};
