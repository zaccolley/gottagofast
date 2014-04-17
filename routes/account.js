
/*
 * GET account page.
 */

exports.show = function(req, res){
	var data = {};

	if(req.session.user){

		var user = {
			forename: req.session.user.user_name.split(" ")[0],
			surname: req.session.user.user_name.split(" ")[1],
			username: req.session.user.user_handle,
			bio: req.session.user.user_bio
		}

		data.loggedin = true;
		data.user = user;

		data.title = data.user.forename + '\'s Account ~ UPGS - University of Portsmouth Gaming Society';

		res.render('account', data);
	}
	else{
		res.redirect('/');
	}
};