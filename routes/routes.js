const Router = express.Router();
import {
  vin_val,
  getPaymentVal,
  setPaymentVal,
  registerVal,
  loginVal,
  getUser,
  validate,
} from "../validations/validator.js";
import {
  autoCheck,
  checkAutoCheck,
  carafax,
  checkCarafax,
  balanceCheck,
  image,
  checkImage,
} from "../controllers/report.js";
import { register, login, getUser } from "../controllers/auth";
import { setPayment, getPayment } from "../controllers/payment";
import cors from "cors";
const router = Router();
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
router.get("/balanceCheck", cors(corsOptions), balanceCheck);
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

export default router;
