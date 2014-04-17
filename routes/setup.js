
/*
 * GET setup page.
 */

 //git commit -m "basic sessions, moved dbconnect into utils, setup in /setup, do not add sensitive info, no hashing yet"

exports.show = function(req, res){

	var db = require('../utils/dbconnect');

	db.connection.query('CREATE DATABASE IF NOT EXISTS upgs', function (err) {
	    if (err) throw err;
	    db.connection.query('USE upgs', function (err) {
	        if (err) throw err;
	        db.connection.query('CREATE TABLE IF NOT EXISTS game('
	            + 'game_id INT AUTO_INCREMENT,'
	            + 'PRIMARY KEY(game_id),'
	            + 'game_name VARCHAR(20)'
	            +  ')', function (err) {
	                if (err) throw err;
	        });
	        /*db.connection.query("INSERT INTO game (game_id, game_name) VALUES\
							(1, 'Battlefield 4'),\
							(2, 'Counterstrike Source'),\
							(3, 'Grand Theft Auto 5'),\
							(4, 'League of Legends'),\
							(5, 'Minecraft'),\
							(6, 'Starcraft 2'),\
							(7, 'World of Warcraft');");*/
	  		db.connection.query('CREATE TABLE IF NOT EXISTS user('
	  			+ 'user_id int(11) NOT NULL AUTO_INCREMENT,'
	            + 'user_name varchar(60) NOT NULL,'
	            + 'user_email varchar(60) NOT NULL,'
	            + 'user_handle varchar(60) NOT NULL,'
	            + 'user_password varchar(32) NOT NULL,'
	            + 'user_bio varchar(500) NOT NULL,'
	            + 'PRIMARY KEY (user_id),'
	            + 'UNIQUE KEY user_handle (user_handle)'
	            +  ')', function (err) {
	                if (err) throw err;
	        });
	        /*db.connection.query("INSERT INTO user  (user_id, user_name, user_email, user_handle, user_password, user_bio) VALUES\
							(1, 'Peter Jones', 'peterjones@upgs.com', 'pj', 'password', 'Hey i''m Peter blah blah'),\
							(2, 'Zac Colley', 'zaccolley@upgs.com', 'zc', 'password', 'Hey i''m Zac blah blah');");*/

		});
	});
	res.redirect('/');
};