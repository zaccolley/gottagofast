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
		$('.account').slideToggle(function(){
			$('body').css('paddingTop', $('header').height());
		});
	});

	$('.cookie-banner').find('button.close').click(function(){
		$('.cookie-banner').addClass('cookie-banner-hide');
	});

	// replace text with X
	$('.cancel').text('X');

})()