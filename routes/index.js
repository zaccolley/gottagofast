
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('home', { title: 'UPGS - University of Portsmouth Gaming Society' });
};