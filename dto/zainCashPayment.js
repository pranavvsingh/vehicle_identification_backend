const { randomeGenerated } = require("../utils/util");
const config = process.env;

exports.zainCashData = (req) => {
  const zainCash = {
    amount: req.body.amount,
    orderId: randomeGenerated(8),
    serviceType: req.body.serviceType,
    redirectUrl: req.body.redirectUrl,
    production: config.env == "prod" ? true : false,
    msisdn: config.msisdn,
    merchantId: config.merchantId,
    secret: config.secret,
    lang: req.body.lang,
  };
  return zainCash;
};
