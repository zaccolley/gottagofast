var express = require('express'),
	exphbs  = require('express3-handlebars'),
	hbs,
	mysql 	= require('mysql'),
	
	routes = require('./routes'),
	account = require('./routes/account'),
	
	http = require('http'),
	path = require('path'),
	
	app = express();

	//leave this alone until I work it out :D
	/*hbs = exphbs.create({
		helpers: {
			games: function(data){
			    return data[0];
			}
		}
	});*/

//lets try some SQL BS
var connection = mysql.createConnection({
        host     : 'localhost',
        port     : '8889',
        user     : 'root',
        password : 'root'
});

connection.query('CREATE DATABASE IF NOT EXISTS upgs', function (err) {
    if (err) throw err;
    connection.query('USE upgs', function (err) {
        if (err) throw err;
        connection.query('CREATE TABLE IF NOT EXISTS game('
            + 'game_id INT AUTO_INCREMENT,'
            + 'PRIMARY KEY(game_id),'
            + 'game_name VARCHAR(20)'
            +  ')', function (err) {
                if (err) throw err;
            });
        /*connection.query("INSERT INTO game (game_id, game_name) VALUES\
						(1, 'Battlefield 4'),\
						(2, 'Counterstrike Source'),\
						(3, 'Grand Theft Auto 5'),\
						(4, 'League of Legends'),\
						(5, 'Minecraft'),\
						(6, 'Starcraft 2'),\
						(7, 'World of Warcraft');");*/
	});
});
connection.query('USE upgs');

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

app.get('/', function(req, res){
	connection.query('SELECT * FROM game LIMIT 6', function(err, rows){
		console.log(rows);
		res.render('home', {games : rows});
	});
});
app.get('/account', account.show);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});