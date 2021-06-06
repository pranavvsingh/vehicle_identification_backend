const express = require("express");
const { vin_val, validate } = require("../validations/validator");
const controller = require("../controllers/controllers");
const cors = require("cors");
const router = express.Router();
require("dotenv").config();

var corsOptions = {};
if (process.env.NODE_ENV == "production") {
	corsOptions = {
		origin: "",
	};
} else if (process.env.NODE_ENV == "staging") {
	corsOptions = {
		origin: "",
	};
} else if (process.env.NODE_ENV == "development") {
	corsOptions = {
		origin: "http://localhost:3000",
	};
}

router.get("/autocheck", cors(corsOptions), vin_val(), validate, controller.autocheck);
router.get("/check_autocheck", cors(corsOptions), vin_val(), validate, controller.check_autocheck);
router.get("/carfax", cors(corsOptions), vin_val(), validate, controller.carfax);
router.get("/check_carafax", cors(corsOptions), vin_val(), validate, controller.check_carafax);
router.get("/balance_check", cors(corsOptions), controller.balance_check);
router.get("/photo", cors(corsOptions), vin_val(), validate, controller.photo);
router.get("/check_photo", cors(corsOptions), vin_val(), validate, controller.check_photo);

module.exports = router;
