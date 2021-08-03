var jwt = require("jsonwebtoken");
const config = process.env;

exports.generateJWT = async (data) => {
  const token = jwt.sign(
    {
      data: data,
    },
    config.TOKEN_KEY,
    { expiresIn: "1h" }
  );
  return token;
};
