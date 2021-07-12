const constants = require("../utils/constant");
const btoa = require("btoa");
const axios = require("axios");
const allData = require("../reportData/allData");
const models = require("../models/model");

exports.autocheck = async (vincode) => {
	try {
		const url = constants.api_url + "/autocheck" + "?vincode=" + vincode + "&api_key=" + constants.api_key;
		// const autocheck = await axios.get(url);
		const autocheck = allData.autocheckData;
		return autocheck;
	} catch (error) {
		throw error;
	}
};

exports.check_autocheck = async (vincode) => {
	try {
		const url = constants.api_url + "/autocheck/check" + "?vincode=" + vincode + "&api_key=" + constants.api_key;
		//var check_autocheck = await axios.get(url);
		var check_autocheck = allData.check_autocheckData;
		return check_autocheck;
	} catch (error) {
		throw error;
	}
};

exports.carfax = async (vincode) => {
	try {
		const url = constants.api_url + "/carfax" + "?vincode=" + vincode + "&api_key=" + constants.api_key;
		//var carfax = await axios.get(url);
		var carfax = allData.carfaxData;
		return carfax;
	} catch (error) {
		throw error;
	}
};

exports.check_carafax = async (vincode) => {
	try {
		const url = constants.api_url + "/carfax/check" + "?vincode=" + vincode + "&api_key=" + constants.api_key;
		//const check_carafax = await axios.get(url);
		const check_carafax = allData.check_carafaxData;
		return check_carafax;
	} catch (error) {
		throw error;
	}
};

exports.balance_check = async () => {
	try {
		const url = constants.api_url + "/carfax/balance" + "?api_key=" + constants.api_key;
		//const balance_check = await axios.get(url);
		const balance_check = allData.balance_checkData;
		return balance_check;
	} catch (error) {
		throw error;
	}
};

exports.photo = async (vincode) => {
	try {
		const url = constants.api_url + "/photo/copart" + "?vincode=" + vincode + "&api_key=" + constants.api_key;
		//const photo = await axios.get(url);
		const photo = allData.photoData;
		return photo;
	} catch (error) {
		throw error;
	}
};

exports.check_photo = async (vincode) => {
	try {
		const url = constants.api_url + "/photo/check/manheim" + "?vincode=" + vincode + "&api_key=" + constants.api_key;
		//const check_photo = await axios.get(url);
		const check_photo = allData.check_photoData;
		return check_photo;
	} catch (error) {
		throw error;
	}
};

exports.set_payment = async (data) => {
	try {
		const table = "users";
		const set_payment = await models.insert(table, data);
		return set_payment;
	} catch (error) {
		throw error;
	}
};

exports.get_payment = async (data) => {
	try {
		const columns = "*"; 
		const table = "users";
		var condition = {};
		if(data.phone){
			condition = {
				"phone":data.phone,
			}
		}else{
			condition = {
				"email":data.email,
			}
		}
		const get_payment = await models.fetch(columns,table, condition);
		return get_payment;
	} catch (error) {
		throw error;
	}
};
