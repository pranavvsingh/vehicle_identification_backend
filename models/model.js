const { constant } = require("async");
const { query } = require("../db/db");

exports.insert = async (dbDetails) => {
  try {
    const userData = JSON.stringify(dbDetails.userData);
    const getUserDataId = getLastInserted(dbDetails.table);
    const rows = await query(
      `INSERT INTO ${dbDetails.table} VALUES ('${userData}')`
    );
    responseHandler.send(res, "success", 200, rows);
  } catch (error) {
    throw error;
  }
};

exports.fetch = async (column, table, condition) => {
  try {
    if (column !== "*") {
      column = column.join(",");
    }
    var consant = [];
    for (var key in condition) {
      consant.push(`${key}="${condition[key]}"`);
    }
    var whereCondition = consant.join(" and ");
    console.log(`SELECT ${column} FROM ${table} WHERE ${whereCondition}`);
    const rows = await query(
      `SELECT ${column} FROM ${table} WHERE ${whereCondition}`
    );
    responseHandler.send(res, "success", 200, rows);
  } catch (error) {
    throw error;
  }
};

exports.fetchAll = async (column, table) => {
  try {
    if (column !== "*") {
      column = column.join(",");
    }
    const rows = await query(`SELECT ${column} FROM ${table}`);
    responseHandler.send(res, "success", 200, rows);
  } catch (error) {
    throw error;
  }
};

exports.fetchByEmail = async (email) => {
  try {
    const table = "Users";
    const rows = await query(
      `SELECT * FROM ${table} WHERE ${US_Email} = email`
    );
    responseHandler.send(res, "success", 200, rows);
  } catch (error) {
    throw error;
  }
};
