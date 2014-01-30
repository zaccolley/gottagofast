(function(){
	
	updateDetails();
	copyButtonSetup();

})()

function updateDetails(){

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

				for(var i = 0; i < players.length; i++){
					var player = players[i];

					$('.players').append("<li class='avatar avatar-hidden' style='background-image: url(http://minotar.net/avatar/"+player+"/32);' data-name='"+player+"''>"+player+"</li>");
				
				}

				$('.players').find('.avatar').each(function(i, avatar){
					var time = (i + 1) * 100 + 250;

					setTimeout(function(){
						$(avatar).removeClass('avatar-hidden');
					}, time);

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

}

function copyButtonSetup(){	

	ZeroClipboard.config({ moviePath: './js/ZeroClipboard.swf' });
	var client = new ZeroClipboard($('.copy-button'));

	client.on('complete', function (client, args){
		$('.copy-button').text('Copied!');
		$('.copy-button').addClass('copy-button-copied');
		setTimeout(function(){
			$('.copy-button-copied').removeClass('copy-button-copied');
			$('.copy-button').text('Copy');
		}, 1500);
	});

	client.on('wrongflash noflash', function() {
		ZeroClipboard.destroy();
	});

}
