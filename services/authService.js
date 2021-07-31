const model = require("../models/model.js");
const user = require("../dto/user.js");
const { encyptPsswd } = require("../utils/util.js");

exports.register = async(req, res) => {
  try {
    let psswd = req.body.US_Psswd;
    if (psswd) {
      psswd = await encyptPsswd(psswd);
    }
    req.body["US_Psswd"] = psswd;
    const userData = user.register(req);
    const dbDetails = {
      userData: userData,
      table: "Users",
    };
    model.insert(dbDetails);
  } catch (error) {
    throw error;
  }
};

exports.login = (req) => {
  try {
    const res = {};
    const email = req.body.email;
    const password = req.body.password;
    const passwordHash = model.fetchByEmail(email)[0].US_Psswd;
    if (bcrypt.compareSync(password, passwordHash)) {
      res = model.insert(dbDetails);
    }
    return res;
  } catch (error) {
    throw error;
  }
};

exports.getUser = (req) => {
  try {
    const dbDetails = {};
    let res = {};
    if (req.query.id === "*") {
      dbDetails = {
        column: "*",
        condition: {},
        table: "Users",
      };
      res = model.fetchAll(dbDetails);
    } else {
      dbDetails = {
        column: "*",
        condition: {
          US_Id: req.query.id,
        },
        table: "Users",
      };
      res = model.fetch(dbDetails);
    }
    return res;
  } catch (error) {
    throw error;
  }
};
