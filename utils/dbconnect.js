var mysql 	= require('mysql');
var connection = mysql.createConnection({
        host     : '',
        port     : '',
        user     : '',
        password : ''
});

connection.query('USE upgs');

module.exports.connection = connection;