
/*
 * GET account page.
 */

exports.show = function(req, res){
	var data = {};

	var bill = {
		forename: 'Bill',
		surname: 'Murray',
		username: 'muzza',
		bio: 'i do films and things sometimes'
	}

	var tim = {
		forename: 'Tim',
		surname: 'Varley',
		username: 'digitiltry',
		bio: 'i am the society pres and do other web tech things'
	}

	data.user = bill;

	data.title = data.user.forename + '\'s Account ~ UPGS - University of Portsmouth Gaming Society';

	res.render('account', data);
};