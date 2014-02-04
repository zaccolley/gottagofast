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

	$('.nav-button').click(function(){
		$('nav ul').toggleClass('hidden');
		
		$('.account').addClass('account--hidden');
		$('.account').attr('type', 'submit').focus();
	});

	$('.log-in a').click(function(e){
		$('.account').toggleClass('account--hidden');
		$('.account').find('input[type="submit"]').focus();
		return false;
	});

	$('.account').find('button[type="reset"]').click(function(){
		$('.account').addClass('account--hidden');
		$('.account').attr('type', 'submit').focus();
	});

	$('.cookie-banner').find('button.close').click(function(){
		$('.cookie-banner').fadeOut();
	});

	$('.ip-address').click(function(){
		$(this).select();
	});

	// replace text with X
	$('.cancel').text('X');
	$('.close').text('X');

	$(window).scroll(function(){ // When the page scrolls
		$fadeSpeed = 250;

		var offset = $('.info-section .join').offset().top + $('.info-section .join').height() - $('header').height();

		if( $(window).scrollTop() > offset ) {     // If the page is scrolled down by 100px
			$('.join__button').removeClass('join__button--hidden');  // Show '.toTheTop' triangle
		}else{ 								    // Above 100px
			$('.join__button').addClass('join__button--hidden');  // Show '.toTheTop' triangle
		}
	});

})()