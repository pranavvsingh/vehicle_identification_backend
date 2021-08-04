const payGatewayServices = require("../services/payGatewayServices")

exports.zainCash = (req,res,next) =>{
    payGatewayServices.zainCash(req, res, next)
}

exports.redirect = (req, res, next) =>{
    payGatewayServices.redirect(req, res, next)
}