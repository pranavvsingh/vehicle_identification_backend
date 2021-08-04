const config = process.env;
const pubApiKey =
  config.env == "prod" ? config.pubApiKey_prod : config.pubApiKey_dev;
const priApiKey =
  config.env == "prod" ? config.priApiKey_prod : config.priApiKey_dev;
const mailjet = require("node-mailjet").connect(
  "7064b07aa2670d998097130bdb6d8ce5",
  "a6c367b6e9a3038793cc1671e7a9a475"
);

exports.sendMail = async (req, res, next) => {
  try {
    const response = await mailjet.post("send", { version: "v3.1" }).request({
      Messages: [
        {
          From: {
            Email: config.env == "prod" ? config.email_prod : config.email_dev,
            Name: config.env == "prod" ? config.name_prod : config.name_dev,
          },
          To: [
            {
              Email: req.body.email,
              Name: req.body.name,
            },
          ],
          Subject: req.body.subject,
          TextPart: req.body.message,
          HTMLPart: req.body.html,
        },
      ],
    });
    res.status(200).json({ status: 200, data: response });
  } catch (error) {
    res
      .status(400)
      .json({ status: 400, message: "Something went wrong with mailjet api" });
  }
};
