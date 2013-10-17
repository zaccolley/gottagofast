(function(){

	setTimeout(function(){
		$('.logo').removeClass('logo-animation');
	}, 250);


	$('li.game').click(function(){
		$('li.game').each(function(){
			$(this).addClass('game-unselected');
		})
		$(this).addClass('game-selected');
		$(this).removeClass('game-unselected');
	});

	$('.log-in a').click(function(){
		$('.log-in').toggleClass('move');
	});

	$('.log-in button[type="reset"]').click(function(){
		$('.log-in').toggleClass('move');
	});

	// replace text with X
	$('.cancel').text('X');

})()