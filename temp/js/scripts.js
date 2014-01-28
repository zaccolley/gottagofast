(function(){

	$.ajax({
		url: "data.php",
		cache: false
	}).done(function(data){
		data = JSON.parse(data);

		var info = data.info;
		var players = data.players;

		console.log(data);

		var status = "unknown";
		var statusStr = "Can't reach server.. :(";

		if(!info){
			status = "offline";
			statusStr = "Server offline.. :(";
		}else{
			status = "online";
			statusStr = "Server online! :D";

			$('.server .status').html(statusStr);
			$('.server').addClass('server-'+status);

			if(!players){
				$('.mc-heads').html('<li>No players online!</li>');
			}else{
				console.log(players);

				$('.mc-heads').html('<li><span>'+ info.Players + " / " + info.MaxPlayers+'</span> players online</li>');

				for(var i = 0; i < players.length; i++){
					var player = players[i];
					$('.mc-heads').append("<li class='avatar' style='background-image: url(http://minotar.net/avatar/"+player+"/32);' title='"+player+"''>"+player+"</li>");
				}
			}

		}

	});


	$('.ip-address').click(function(){
		$(this).select();
	});

})()
