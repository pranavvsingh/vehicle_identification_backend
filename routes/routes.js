const express = require("express");
const auth = require("../jwt/verifyJWT");
const cors = require("cors");
const {
  vin_val,
  getPaymentVal,
  setPaymentVal,
  registerVal,
  loginVal,
  getUserVal,
  validate,
} = require("../validations/validator.js");
const {
  autoCheck,
  checkAutoCheck,
  carafax,
  checkCarafax,
  checkBalance,
  image,
  checkImage,
} = require("../controllers/report");

const {
  register,
  login,
  getUser,
  getUsers,
} = require("../controllers/auth.js");
const { zainCash, redirect } = require("../controllers/payGateway.js");
const { setPayment, getPayment } = require("../controllers/payment.js");
const { sendMessage } = require("../controllers/message.js");
const { sendMail } = require("../controllers/mail.js");
const router = express.Router();
require("dotenv").config();

const whitelist = ["http://localhost:3000"];
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};
router.get("/autoCheck", cors(corsOptions), vin_val(), validate, autoCheck);

router.get(
  "/checkAutoCheck",
  cors(corsOptions),
  vin_val(),
  validate,
  checkAutoCheck
);
router.get("/carafax", cors(corsOptions), auth, vin_val(), validate, carafax);
router.get(
  "/checkCarafax",
  cors(corsOptions),
  vin_val(),
  validate,
  checkCarafax
);
router.get("/checkBalance", cors(corsOptions), checkBalance);
router.get("/image", cors(corsOptions), vin_val(), validate, image);
router.get("/checkImage", cors(corsOptions), vin_val(), validate, checkImage);
router.post(
  "/payment",
  cors(corsOptions),
  auth,
  setPaymentVal(),
  validate,
  setPayment
);
router.get(
  "/payment",
  cors(corsOptions),
  auth,
  getPaymentVal(),
  validate,
  getPayment
);
router.post("/zainCash", cors(corsOptions), auth, zainCash);

router.post("/message", cors(corsOptions), sendMessage);

router.post("/mail", cors(corsOptions), sendMail);

router.get("/redirect", cors(corsOptions), auth, redirect);

router.post("/register", cors(corsOptions), registerVal(), validate, register);
router.get("/login", cors(corsOptions), loginVal(), validate, login);
router.get(
  "/getUser",
  cors(corsOptions),
  auth,
  getUserVal(),
  validate,
  getUser
);
router.get("/getUsers", cors(corsOptions), getUsers);

module.exports = router;
