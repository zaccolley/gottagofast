
/*
 * GET account page.
 */

exports.show = function(req, res){
	var data = {};

	data.title = 'Account ~ UPGS - University of Portsmouth Gaming Society';

	data.user = {
		forename: 'Bill',
		surname: 'Murray',
		username: 'muzza',
		bio: 'i do films and things sometimes'
	}

	res.render('account', data);
};