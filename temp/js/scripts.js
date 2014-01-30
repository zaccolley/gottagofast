(function(){

	$.ajax({
		url: "data.php",
		cache: false
	}).done(function(data){
		data = JSON.parse(data);

		var info = data.info;
		var players = data.players;

		var status = "offline";
		var statusStr = "Server offline&hellip;";

		if(info){
			status = "online";
			statusStr = "Server online!";

			if(!players){
				$('.players').html('<li>No players online!</li>');
			}else{

				$('.players').html('<li><span>'+ info.Players + " / " + info.MaxPlayers+'</span> players online</li>');

				// players = ["Notch", "ZacColley", "SethBling", "Kepha", "Dinnerbone", "Etho", 
				// "Notch", "ZacColley", "SethBling", "Kepha", "Dinnerbone", "Etho", 
				// "Notch", "ZacColley", "SethBling", "Kepha", "Dinnerbone", "Etho", 
				// "Notch", "ZacColley", "SethBling", "Kepha", "Dinnerbone", "Etho"];

				for(var i = 0; i < players.length; i++){
					var player = players[i];

					$('.players').append("<li class='avatar avatar-hidden' style='background-image: url(http://minotar.net/avatar/"+player+"/32);' data-name='"+player+"''>"+player+"</li>");
				
				}

				$('.players li').each(function(i, avatar){
					var time = (i * 100);

					setTimeout(function(){
						$(avatar).removeClass('avatar-hidden');
					}, time);

					console.log(time);
				});

			}

			$('.players').addClass('players-shown');

		}

		$('.status').html(statusStr);
		$('.server').addClass('server-'+status);

	}).fail(function(){

		var status = "unknown";
		var statusStr = "Can't reach server&hellip;";


		$('.status').html(statusStr);
		$('.server').addClass('server-'+status);

	});

	$('.ip-address').find('textarea').click(function(){ $(this).select(); });

	ZeroClipboard.config({ moviePath: './js/ZeroClipboard.swf' });
	var client = new ZeroClipboard($('.copy-button'));

	client.on('complete', function (client, args){
		$('.copy-button').text('Copied!');
		$('.copy-button').addClass('copy-button-copied').removeClass('copy-button');
	});

})()
