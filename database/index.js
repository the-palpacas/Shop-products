const mysql = require('mysql');

const connection = mysql.createConnection({
  user: 'root',
  database: 'shopProducts',
  multipleStatements: true,
});

connection.connect();


module.exports = connection;

