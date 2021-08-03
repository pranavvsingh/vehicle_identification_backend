const { query } = require("../db/db");
const responseHandler = require("../responseHandler/responseHandler");
const constants = require("../utils/constant");

exports.insert = async (dbDetails, res) => {
  try {
    const data = dbDetails.data;
    let columns = [];
    let values = [];
    for (var key in data) {
      columns.push(key);
      if (typeof data[key] == "string") {
        values.push(`"${data[key]}"`);
      } else if (typeof data[key] == "number") {
        values.push(data[key]);
      }
    }
    columns = columns.join(",");
    values = values.join(",");

    const rows = await query(
      `INSERT INTO ${dbDetails.table} (${columns}) VALUES (${values});`
    );
    const insertedData = await query(
      `select * from ${dbDetails.table} ORDER BY ${dbDetails.idField} DESC
      LIMIT 1; `
    );
    delete insertedData[0].US_Psswd;
    return insertedData;
  } catch (error) {
    responseHandler.send(res, "errorcode", 500, constants.someError);
  }
};

exports.fetch = async (dbDetails, res) => {
  try {
    let column = dbDetails.column;
    let condition = dbDetails.condition;
    let table = dbDetails.table;
    if (column !== "*") {
      column = column.join(",");
    }
    let consant = [];
    for (let key in condition) {
      consant.push(`${key}="${condition[key]}"`);
    }
    let whereCondition = consant.join(" and ");
    const rows = await query(
      `SELECT ${column} FROM ${table} WHERE ${whereCondition}`
    );
    return rows;
  } catch (error) {
    responseHandler.send(res, "errorcode", 500, constants.someError);
  }
};

exports.fetchAll = async (dbDetails, res) => {
  try {
    let column = dbDetails.column;
    if (column !== "*") {
      column = column.join(",");
    }
    const rows = await query(`SELECT ${column} FROM ${dbDetails.table}`);
    return rows;
  } catch (error) {
    responseHandler.send(res, "errorcode", 500, constants.someError);
  }
};

exports.fetchByEmail = async (email, next) => {
  try {
    const table = "Users";
    const field = "US_Email";
    email = JSON.stringify(email);
    const rows = await query(
      `SELECT * FROM ${table} WHERE ${field} = ${email}`
    );
    return JSON.parse(JSON.stringify(rows));
  } catch (error) {
    responseHandler.send(res, "errorcode", 500, constants.someError);
  }
};
