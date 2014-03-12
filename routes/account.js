
/*
 * GET account page.
 */

exports.show = function(req, res){
  res.render('account', { title: 'Account ~ UPGS - University of Portsmouth Gaming Society', user: 'Tim' });
};