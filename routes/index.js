
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
			console.log(req.session.user.user_name);
			var user = {
				forename: req.session.user.user_name.split(" ")[0],
				surname: req.session.user.user_name.split(" ")[1],
				username: req.session.user.user_handle,
				bio: req.session.user.user_bio
			}

			data.loggedin = true;
			data.user = user;
		}

		data.title = 'UPGS - University of Portsmouth Gaming Society';

	  	res.render('home', data);
	});
};