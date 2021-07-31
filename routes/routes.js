const express = require("express");
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
} = require( "../controllers/report.js");
const { register, login, getUser } =  require("../controllers/auth.js");
const { setPayment, getPayment } = require("../controllers/payment.js");
const cors = require("cors");
const router = express.Router();
require("dotenv").config();

const whitelist = ["http://localhost:3000", "https://test.zaincash.iq"];
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
router.get("/carafax", cors(corsOptions), vin_val(), validate, carafax);
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
  setPaymentVal(),
  validate,
  setPayment
);
router.get(
  "/payment",
  cors(corsOptions),
  getPaymentVal(),
  validate,
  getPayment
);
router.post("/register", cors(corsOptions), registerVal(), validate, register);
router.get("/login", cors(corsOptions), loginVal(), validate, login);
router.get("/getUser", cors(corsOptions), getUserVal(), validate, getUser);

module.exports = router 
