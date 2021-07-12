const httpStatus = require("http-status");
const services = require("../services/services");
const constants = require("../utils/constant");
var jwt = require('jsonwebtoken');
var request = require('request');

exports.autocheck = async (req, res, next) => {
	try {
		const vincode = req.query.vincode;
		console.log("vincode",vincode)
		const autocheck = await services.autocheck(vincode);
		return res.status(200).json(JSON.parse(JSON.stringify(autocheck)));
	} catch (error) {
		if (error.response) {
			res.status(error.response.status).send(error.response.statusText0);
		} else {
			res.status(400).send(constants.someError);
		}
	}
};

exports.check_autocheck = async (req, res, next) => {
	try {
		const vincode = req.query.vincode;
		const check_autocheck = await services.check_autocheck(vincode);
		return res.status(200).json(JSON.parse(JSON.stringify(check_autocheck)));
	} catch (error) {
		if (error.response) {
			res.status(error.response.status).send(constants.someError);
		} else {
			res.status(400).send(constants.someError);
		}
	}
};

exports.carfax = async (req, res, next) => {
	try {
		const vincode = req.query.vincode;
		const carfax = await services.carfax(vincode);
		return res.status(200).send(carfax);
	} catch (error) {
		if (error.response) {
			res.status(error.response.status).send(constants.someError);
		} else {
			res.status(400).send(constants.someError);
		}
	}
};

exports.check_carafax = async (req, res, next) => {
	try {
		const vincode = req.query.vincode;
		const check_carafax = await services.check_carafax(vincode);
		return res.status(200).json(JSON.parse(JSON.stringify(check_carafax)));
	} catch (error) {
		if (error.response) {
			res.status(error.response.status).send(constants.someError);
		} else {
			res.status(400).send(constants.someError);
		}
	}
};

exports.balance_check = async (req, res, next) => {
	try {
		const balance_check = await services.balance_check();
		return res.status(200).json(JSON.parse(JSON.stringify(balance_check)));
	} catch (error) {
		if (error.response) {
			res.status(error.response.status).send(constants.someError);
		} else {
			res.status(400).send(constants.someError);
		}
	}
};

exports.photo = async (req, res, next) => {
	try {
		const vincode = req.query.vincode;
		const photo = await services.photo(vincode);
		return res.status(200).json(JSON.parse(JSON.stringify(photo)));
	} catch (error) {
		if (error.response) {
			res.status(error.response.status).send(constants.someError);
		} else {
			res.status(400).send(constants.someError);
		}
	}
};

exports.check_photo = async (req, res, next) => {
	try {
		const vincode = req.query.vincode;
		const check_photo = await services.check_photo(vincode);
		return res.status(200).json(JSON.parse(JSON.stringify(check_photo)));
	} catch (error) {
		console.log("error", error);
		if (error.response) {
			res.status(error.response.status).send(error.response.statusText);
		} else {
			res.status(400).send(constants.someError);
		}
	}
};

exports.set_payment = async (req, res, next) => {
	try {
		const data = {
			"email": req.body.email,
			"phone": req.body.phone,
			"payment": req.body.payment,
			"carafax": req.body.carafax,
			"autocheck": req.body.autocheck,
			"image": req.body.image,
		}
		const set_payment = await services.set_payment(data);
		var response = {
			"status":200,
			"data":JSON.parse(JSON.stringify(set_payment)),
		}
		return res.status(200).send(response);
	} catch (error) {
		console.log("error", error);
		if (error.response) {
			res.status(error.response.status).send(error.response.statusText);
		} else {
			res.status(400).send(constants.someError);
		}
	}
};

exports.get_payment = async (req, res, next) => {
	try {
		const data = {
			email:req.body.email,
			phone:req.body.phone,
		}
		console.log("data111111111111111111",data)
		const get_payment = await services.get_payment(data);
		const response = {
			"status":200,
			"data":JSON.parse(JSON.stringify(get_payment)),
		}
		console.log("response111111111111",response)
		return res.status(200).send(response);
	} catch (error) {
		console.log("error", error);
		if (error.response) {
			res.status(error.response.status).send(error.response.statusText);
		} else {
			res.status(400).send(constants.someError);
		}
	}
};

exports.payment = async (req, res, next) => {
	try {
		var token = await jwt.sign({
			amount: 1000,//Product Ammout
			serviceType: 'AAA books website',
			msisdn: 9647835077893,
			orderId: 12345,//optional
		}, '$2y$10$hBbAZo2GfSSvyqAyV2SaqOfYewgYpfR1O19gIh4SqyGWdmySZYPuS', {
			expiresIn: '4h'
		});
		console.log("token",token)
		request.post({
			url: 'https://test.zaincash.iq/transaction/init',
			form: {
		
				token: token,
				merchantId: "5ffacf6612b5777c6d44266f",
				lang: "ar"//optional
			}
		}, function (err, httpResponse, body) {
			console.log("httpresponse",httpResponse)
			console.log("body",body)
			var body = JSON.parse(body); // response of body { id : "asdae123asd123asd" }
			if (body.id)
				return res.redirect('https://test.zaincash.iq/transaction/pay?id=' + body.id);
			return res.redirect('/payment?msg=cannot_generate_token');
		})
	} catch (error) {
		console.log("error", error);
		if (error.response) {
			res.status(error.response.status).send(error.response.statusText);
		} else {
			res.status(400).send(constants.someError);
		}
	}
};
