const { query } = require("../db/db");

exports.getLastInserted = (table) => {
  const rows = await query(`select *from ${table} where Id=(SELECT LAST_INSERT_ID()));
  `
};
