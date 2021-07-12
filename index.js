var express = require("express");
var serveStatic = require("serve-static");
var bodyparser = require("body-parser");
var routes = require("./routes/routes");
var cron = require("node-cron");
const https = require("https");
const fs = require("fs");
const querystring = require("querystring");
const helmet = require("helmet");
const btoa = require("btoa");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");
const cors = require("cors");
const constants = require("./utils/constant");
require("dotenv").config();
const request = require('request');
const jwt = require('jsonwebtoken');

let initUrl = 'https://test.zaincash.iq/transaction/init';
let requestUrl = 'https://test.zaincash.iq/transaction/pay?id=';

const serviceType = "CheckVin Report Payment";

//after a successful or failed order, the user will redirect to this url
const redirectUrl = 'http://localhost:3000/#/redirect';

var app = express();
app.use(cors());
app.use(helmet());
app.use(xss());
app.use(mongoSanitize());
app.use(
    bodyparser.json({
        limit: "100mb",
    })
);
app.use(
    bodyparser.urlencoded({
        limit: "100mb",
    })
);

app.post('/api/payment', (req, res) => {
    const time = Date.now();
    const data = {
      'amount': (req.body.amount)*1460,
      'serviceType': serviceType,
      'msisdn': 9647835077893,
      'redirectUrl': redirectUrl,
      'iat': time,
      'exp': time + 600 * 60 * 4
    };
    const token = jwt.sign(data, "$2y$10$hBbAZo2GfSSvyqAyV2SaqOfYewgYpfR1O19gIh4SqyGWdmySZYPuS");
    const postData = {
      'token': token,
      'merchantId': "5ffacf6612b5777c6d44266f",
      'lang': "ar"
    };
    const requestOptions = {
      uri: initUrl,
      body: JSON.stringify(postData),
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    };
  
    request(requestOptions, function (error, response) {
        const OperationId = JSON.parse(response.body).id;
        var data = {
          url:requestUrl + OperationId,
          token:token
        }
        res.send(data);
        res.end();
    });
  });

  app.post('/api/redirect', (req, res) => {
    console.log("token Recieved:",req.body.token)
    const token = req.body.token;
    if(token){
      try {
        var decoded = jwt.verify(token, "$2y$10$hBbAZo2GfSSvyqAyV2SaqOfYewgYpfR1O19gIh4SqyGWdmySZYPuS");
      } catch(err) {
        console.log("error",err)
      }
      if(decoded.status == 'success'){
        console.log("sucess1111111111111111")
        res.send("success")
      }else {
        console.log("failed22222222222222222")
        res.send("success")
      }
    }
  });

app.use("/api", routes);

if (process.env.NODE_ENV == "production" || process.env.NODE_ENV == "staging") {
    app.listen(process.env.PORT || 443);
    console.log("Server started ...");
} else {
    app.listen(process.env.PORT || 443);
    console.log("Server started ...", process.env.PORT);
}
