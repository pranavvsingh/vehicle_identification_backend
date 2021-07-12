const { constant } = require("async");
const {query}  = require("../db/db");

exports.insert = async (table,data) => {
	try {
		const email = data.email;
		const phone = data.phone;
		const payment = data.payment;
		const carafax = data.carafax;
		const autocheck = data.autocheck;
		const image = data.image;
		const rows = await query(`INSERT INTO ${table} (email,phone,payment,carafax,autocheck,image) VALUES ("${email}",${phone},${payment},${carafax},${autocheck},${image})`);
    return rows;
	} catch (error) {
		throw error;
	}
};

exports.fetch = async (column,table,condition) => {
	try {
    if(column !== "*"){
     column = column.join(",")
    }
    var consant = [];
    for(var key in condition) {
      consant.push(`${key}="${condition[key]}"`);
    }
    var whereCondition = consant.join(" and ");
	console.log(`SELECT ${column} FROM ${table} WHERE ${whereCondition}`)
	const rows = await query(`SELECT ${column} FROM ${table} WHERE ${whereCondition}`);
	console.log("rowsssssssssss",rows)
    return rows;
	} catch (error) {
		throw error;
	}
};

exports.fetchAll = async (column,table) => {
	try {
    if(column !== "*"){
     column = column.join(",")
    }
		const rows = await query(`SELECT ${column} FROM ${table}`);
    return rows;
	} catch (error) {
		throw error;
	}
};
