
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'UPGS - University of Portsmouth Gaming Society' });
};