const mysql = require('mysql');
const util = require('util');

const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'root',
    database : 'VIS'
  });

const query = util.promisify(connection.query).bind(connection);

module.exports = {
    query,
}

