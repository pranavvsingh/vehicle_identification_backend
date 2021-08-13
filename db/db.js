const mysql = require("mysql");
const util = require("util");

// const connection = mysql.createConnection({
//     host     : 'localhost',
//     user     : 'root',
//     password : 'root',
//     database : 'create_vin'
//   });

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "create_vin",
});

const query = util.promisify(connection.query).bind(connection);

module.exports = {
  query,
};
