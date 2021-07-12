const express = require("express");
const { vin_val, set_payment_val, get_payment_val, validate } = require("../validations/validator");
const controller = require("../controllers/controllers");
const cors = require("cors");
const router = express.Router();
require("dotenv").config();

const whitelist = ['http://localhost:3000', 'https://test.zaincash.iq']
var corsOptions = {
	origin: function (origin, callback) {
	  if (whitelist.indexOf(origin) !== -1 || !origin) {
		callback(null, true)
	  } else {
		callback(new Error('Not allowed by CORS'))
	  }
	}
  }

router.get("/autocheck", cors(corsOptions), vin_val(), validate, controller.autocheck);
router.get("/check_autocheck", cors(corsOptions), vin_val(), validate, controller.check_autocheck);
router.get("/carfax", cors(corsOptions), vin_val(), validate, controller.carfax);
router.get("/check_carafax", cors(corsOptions), vin_val(), validate, controller.check_carafax);
router.get("/balance_check", cors(corsOptions), controller.balance_check);
router.get("/photo", cors(corsOptions), vin_val(), validate, controller.photo);
router.get("/check_photo", cors(corsOptions), vin_val(), validate, controller.check_photo);
router.post("/set_payment", cors(corsOptions), set_payment_val(), validate, controller.set_payment);
router.post("/get_payment", cors(corsOptions), get_payment_val(), validate, controller.get_payment);

module.exports = router;
