const messageServices = require("../services/messageServices")

exports.sendMessage = (req,res,next) =>{
    messageServices.sendMessage(req, res, next)
}