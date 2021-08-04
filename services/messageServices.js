const twilio = require("twilio");
const config = process.env;

exports.sendMessage = async (req, res, next) => {
  try {
    const accountSid =
      config.env == "prod" ? config.accountSid_prod : config.accountSid_dev;
    const authToken =
      config.env == "prod" ? config.authToken_prod : config.authToken_dev;
    const fromNumber =
      config.env == "prod" ? config.fromNumber_prod : config.fromNumber_dev;
    const client = new twilio(accountSid, authToken);
    const message = await client.messages.create({
      body: req.body.message,
      to: req.body.toNumber,
      from: fromNumber,
    });
    res.status(200).json({ status: 200, data: message });
  } catch (error) {
    res.status(400).json({ status: 400, message: "Something went wrong with twilio api" });
  }
};
