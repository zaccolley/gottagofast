var express = require('express'),
	exphbs  = require('express3-handlebars'),
	
	routes = require('./routes'),
	account = require('./routes/account'),
	
	http = require('http'),
	path = require('path'),
	
	app = express();

app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs'}));
app.set('view engine', 'hbs');

app.use(express.favicon());

app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());

app.use(app.router);

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', routes.index);
app.get('/account', account.show);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});