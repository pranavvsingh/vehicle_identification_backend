const httpStatus = require("http-status");
const services = require("../services/services");
const constants = require("../utils/constant");

exports.autocheck = async (req, res, next) => {
	try {
		const vincode = req.query.vincode;
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
