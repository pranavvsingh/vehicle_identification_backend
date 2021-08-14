const { query } = require("../db/db");
const util = require("../utils/util");

exports.insert = async (dbDetails, res) => {
  try {
    const data = dbDetails.data;
    const updatedData = dbDetails.updateData;

    let { columns, values } = util.getColumnValue(data);
    if (updatedData) {
      let { whereCondition, updateValues } =
        util.createUpdateQuery(updatedData);
      const queryText = `UPDATE ${dbDetails.table} SET ${updateValues} WHERE ${whereCondition}`
      await query(
        `UPDATE ${dbDetails.table} SET ${updateValues} WHERE ${whereCondition}`
      );
    }
    await query(
      `INSERT INTO ${dbDetails.table} (${columns}) VALUES (${values});`
    );
    const insertedData = await query(
      `select * from ${dbDetails.table} ORDER BY ${dbDetails.idField} DESC
      LIMIT 1; `
    );
    if (insertedData[0].US_Psswd) {
      delete insertedData[0].US_Psswd;
    }
    return insertedData;
  } catch (error) {
    throw error;
  }
};

exports.fetch = async (dbDetails, res) => {
  try {
    let column = dbDetails.column;
    let condition = dbDetails.condition;
    let extras = dbDetails.extras;
    let table = dbDetails.table;
    let rows;
    if (column !== "*") {
      column = column.join(",");
    }
    let consant = [];
    for (let key in condition) {
      consant.push(`${key}="${condition[key]}"`);
    }
    let whereCondition = consant.join(" and ");
    if (extras) {
      rows = await query(
        `SELECT ${column} FROM ${table} WHERE ${whereCondition} ORDER BY ${extras.replace(
          '""',
          ""
        )} DESC LIMIT 1`
      );
    } else {
      rows = await query(
        `SELECT ${column} FROM ${table} WHERE ${whereCondition}`
      );
    }
    return rows;
  } catch (error) {
    throw error;
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
    throw error;
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
    throw error;
  }
};
