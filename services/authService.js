const model = require("../models/model.js");
const user = require("../dto/user.js");
const responseHandler = require("../responseHandler/responseHandler");
const { comparePsswd, getUsersFromJwt } = require("../utils/util");
const { generateJWT } = require("../jwt/generateJWT.js");
const { validateUser, validateUserInfo, validateUserUpdateInfo } = require("../dto/user");

exports.register = async (req, res, next) => {
  try {
    let userData = await validateUser(req, res);
    const checkUserExist = await model.fetchByEmail(req.body.US_Email);
    if (checkUserExist.length === 1) {
      responseHandler.send(res, "errorcode", 409);
    } else {
      let dbDetails = {};
      dbDetails = {
        data: userData,
        table: "Users",
        idField: "id",
      };
      let insertUser = await model.insert(dbDetails, res);
      let userInfo = await validateUserInfo(req, insertUser, res);
      dbDetails = {
        data: userInfo,
        table: "UserInfo",
        idField: "UI_Id",
      };
      var insertUserInfo = await model.insert(dbDetails, res);
      if (
        insertUser &&
        insertUser.length > 0 &&
        insertUserInfo &&
        insertUserInfo.length > 0
      ) {
        let response = {};
        response = {
          ...insertUser[0],
          ...insertUserInfo[0],
        };
        responseHandler.send(res, "success", 200, response);
      }
    }
  } catch (error) {
    throw error;
  }
};

exports.updateUserInfo = async (req, res, next) => {
  try {
    let userInfo = await validateUserUpdateInfo(req, res);

    const dbDetails = {
      data: userInfo,
      table: "UserInfo",
      idField: "UI_Id",
    };
    var response = await model.insert(dbDetails, res);
    if (response && response.length > 0) {
      responseHandler.send(res, "success", 200, response[0]);
    }
  } catch (error) {
    throw error;
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
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
    throw error;
  }
};

exports.getUser = async (req, res, next) => {
  try {
    const user = await getUsersFromJwt(req, res, next);

    var dbDetails = {
      column: "*",
      condition: {
        id: user && user.data ? user.data.id : req.query.id,
      },
      table: "Users",
      extras: "",
    };
    var userData = await model.fetch(dbDetails, res);
    dbDetails = {
      column: "*",
      condition: {
        id: user && user.data ? user.data.id : req.query.id,
      },
      table: "UserInfo",
      extras: "UI_Id",
    };
    var userInfo = await model.fetch(dbDetails, res);
    let response = {
      ...userData[0],
      ...userInfo[0],
    };
    delete response.US_Psswd;
    if (userData && userData.length > 0 && userInfo && userInfo.length > 0) {
      responseHandler.send(res, "success", 200, response);
    } else {
      responseHandler.send(res, "errorcode", 400);
    }
  } catch (error) {
    throw error;
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
    throw error;
  }
};
