
/*
 * GET user page.
 */

exports.show = function(req, res){

	var data = {};

	if(req.session.user){

		var db = require('../utils/dbconnect');

		db.connection.query('SELECT * FROM user WHERE user_handle = "' + req.params.user + '"', function(err, rows){
			console.log(rows[0]);
			var user = {
				forename: rows[0].user_name.split(" ")[0],
				surname: rows[0].user_name.split(" ")[1],
				username: rows[0].user_handle,
				bio: rows[0].user_bio
			}

			data.loggedin = true;
			data.user = user;

			data.title = data.user.forename + '\'s Profile ~ UPGS - University of Portsmouth Gaming Society';

			res.render('user', data);
		});
	}
	else{
		res.redirect('/');
	}
};