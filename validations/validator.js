const { check, validationResult } = require("express-validator");
const constants = require("../utils/constant");

exports.vin_val = () => {
	return [check("vincode").not().isEmpty().trim().escape().withMessage(constants.invalidDataFormat)];
};

exports.set_payment_val = () => {
	return [];
};

exports.get_payment_val = () => {
	return [];
};

exports.validate = (req, res, next) => {
	const errors = validationResult(req);

	if (errors.isEmpty()) {
		return next();
	}
	const extractedErrors = [];
	errors.array().map((err) => extractedErrors.push({ [err.param]: err.msg }));

	return res.status(422).json({
		errors: extractedErrors,
	});
};
