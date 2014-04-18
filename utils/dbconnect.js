var mysql 	= require('mysql');
var dbdetails = require('./dbdetails.js');

// copy dbdetails-template.js to dbdetails.js with your db details

var connection = mysql.createConnection(dbdetails);

connection.query('USE upgs');

module.exports.connection = connection;