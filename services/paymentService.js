import model from "../model/model";
import payment from "../dto/user";


export function setPayment(req) {
  try {
    const paymentData = payment.setPaymentData(req);
    const dbDetails = {
        data: paymentData,
        table: "Payments",
    }
    const res = model.insert(dbDetails);
    return res;
  } catch (error) {
    throw error;
  }
}


export function getPayment(req) {
  try {
    const dbDetails = {};
    const res;
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
}
