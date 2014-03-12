var express = require('express'),
    exphbs  = require('express3-handlebars'),

	http = require('http'),
	path = require('path'),

	routes = require('./routes'),

    app = express();

app.set('port', process.env.PORT || 3000);
app.use(express.static(path.join(__dirname, 'public')));

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs'}));
app.set('view engine', 'hbs');

app.get('/', routes.index);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
