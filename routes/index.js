
/*
 * GET home page.
 */

exports.show = function(req, res){

	var db = require('../utils/dbconnect');

	var data = {};
	db.connection.query('SELECT * FROM game LIMIT 6', function(err, rows){
		//console.log(rows);
		data.games = rows;
		if(req.session.user){
			data.loggedin = true;
		}
		data.title = 'UPGS - University of Portsmouth Gaming Society';
	  	res.render('home', data);
	});
};