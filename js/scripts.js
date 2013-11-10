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
			$('.account').find('input[type="submit"]').focus();
		});
	});

	$('.account').find('button[type="reset"]').click(function(){
		$('.account').slideToggle(function(){
			$('.account').attr('type', 'submit').focus();
		});
	});

	$('.cookie-banner').find('button.close').click(function(){
		$('.cookie-banner').addClass('cookie-banner-hide');
	});

	$('.ip-address').click(function(){
		$(this).select();
	});

	// replace text with X
	$('.cancel').text('X');

	$(window).scroll(function(){ // When the page scrolls
		$fadeSpeed = 250;

		var offset = $('.info-section .join').offset().top + $('.info-section .join').height() - $('header').height();

		if( $(window).scrollTop() > offset ) {     // If the page is scrolled down by 100px
			$('nav .join').fadeIn($fadeSpeed);  // Show '.toTheTop' triangle
		}else{ 								    // Above 100px
			$('nav .join').fadeOut($fadeSpeed); // Hide '.toTheTop' triangle
		}
	});

})()