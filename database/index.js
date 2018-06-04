var mysql = require('mysql');
var dbConnection = mysql.createConnection({
  user: 'root',
  database: 'shopProducts'
})

module.exports = dbConnection;

