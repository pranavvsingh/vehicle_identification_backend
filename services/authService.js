const model = require("../models/model.js");
const user = require("../dto/user.js");
const responseHandler = require("../responseHandler/responseHandler");
const { comparePsswd } = require("../utils/util");
const { generateJWT } = require("../jwt/generateJWT.js");

exports.register = async (req, res, next) => {
  try {
    let userData = await user.register(req, res);

    const checkUserExist = await model.fetchByEmail(req.body.US_Email);
    if (checkUserExist.length === 1) {
      responseHandler.send(res, "errorcode", 409);
    } else {
      const dbDetails = {
        data: userData,
        table: "Users",
        idField: "id",
      };
      var response = await model.insert(dbDetails, res);
      if (response && response.length > 0) {
        responseHandler.send(res, "success", 200, response);
      }
    }
  } catch (error) {
    responseHandler.send(res, "errorcode", 500);
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.query;
    const userData = await model.fetchByEmail(email);
    if (userData.length > 0) {
      if (await comparePsswd(userData[0]["US_Psswd"], password)) {
        delete userData[0].US_Psswd;
        if (userData[0]["US_Register_Status"] == 1) {
          const token = await generateJWT(userData[0]);
          userData[0]["US_Token"] = token;
        }
        responseHandler.send(res, "success", 200, userData);
      } else {
        responseHandler.send(res, "errorcode", 403);
      }
    } else {
      responseHandler.send(res, "errorcode", 404);
    }
  } catch (error) {
    responseHandler.send(res, "errorcode", 403);
  }
};

exports.getUser = async (req, res, next) => {
  try {
    const dbDetails = {
      column: "*",
      condition: {
        id: req.query.id,
      },
      table: "Users",
    };
    var response = await model.fetch(dbDetails, res);
    if (response && response.length > 0) {
      responseHandler.send(res, "success", 200, response);
    } else {
      responseHandler.send(res, "errorcode", 404);
    }
  } catch (error) {
    responseHandler.send(res, "errorcode", 500);
  }
};

exports.getUsers = async (req, res, next) => {
  try {
    const dbDetails = {
      column: "*",
      condition: {},
      table: "Users",
    };
    var response = await model.fetchAll(dbDetails, res);
    if (response && response.length > 0) {
      responseHandler.send(res, "success", 200, response);
    } else {
      responseHandler.send(res, "errorcode", 404);
    }
  } catch (error) {
    responseHandler.send(res, "errorcode", 500);
  }
};
