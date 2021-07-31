import model from "../model/model";
import user from "../dto/user";
import {encyptPsswd} from  "../utils/util"


export function register(req) {
  try {
    const psswd = req.body.US_Psswd;
    if(psswd){
      psswd = encyptPsswd(psswd);
    }
    req.body[psswd] = psswd;
    const userData = user.register(req);
    const dbDetails = {
      userData: userData,
      table: "Users",
    };
    const res = model.insert(dbDetails);
    return res;
  } catch (error) {
    throw error;
  }
}

export function login(req) {
    try {
      const res = {};
      const email = req.body.email;
      const password = req.body.password;
      const passwordHash = model.fetchByEmail(email)[0].US_Psswd;
      if(bcrypt.compareSync(password, passwordHash)){
        res = model.insert(dbDetails);
      }
      return res;
    } catch (error) {
      throw error;
    }
  }

export function getUser(req) {
  try {
    const dbDetails = {};
    const res;
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
}
