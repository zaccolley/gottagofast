var express = require('express'),
	exphbs  = require('express3-handlebars'),
	hbs,
	mysql 	= require('mysql'),
	//RedisStore = require('connect-redis')(express),
	
	routes = require('./routes'),
	account = require('./routes/account'),
	index = require('./routes/index'),
	user = require('./routes/user'),
	setup = require('./routes/setup'),
	
	http = require('http'),
	path = require('path'),
	
	app = express();

app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs'}));
app.set('view engine', 'hbs');

app.use(express.favicon());

//app.use(express.session({ store: new RedisStore }));

app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());

app.use(express.bodyParser());
app.use(express.cookieParser('secret')); 
app.use(express.session()); 
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

//setup db
app.get('/setup', setup.show);
//

app.get('/', index.show);

app.get('/login', function(req, res){
	res.redirect('/');
});

app.post('/login', function(req, res){
	var user = req.body.user;
	var pass = req.body.pass;

	console.log(user + ' ' + pass);

	var db = require('./utils/dbconnect');

	db.connection.query('SELECT * FROM user WHERE user_handle = "' + user + '" AND user_password = "' + pass + '"', function(err, rows){
		req.session.user = rows[0];
		console.log(req.session.user);
		console.log(rows.length);
		var length = rows.length;
		res.send(''+length);
	});
});

app.get('/logout', function(req, res){                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
  req.session.destroy(function(){                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
    res.redirect('/');                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
  });                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
}); 

app.get('/account', account.show);

app.get('/user/:user', user.show);

app.use(function(req, res, next){
  res.send(404, 'Sorry cant find that!');
});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});