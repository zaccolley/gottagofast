$(document).ready(function(){

	setTimeout(function(){
		$('.logo').removeClass('logo-animation');
	}, 250);


	$('li.game').click(function(){
		$('li.game').each(function(){
			$(this).addClass('game-unselected');
		});
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

	$('.account').find('button[type="submit"]').click(function(){

		$('.account').find('input[name="user"]').removeClass('error');
		$('.account').find('input[name="pass"]').removeClass('error');

		var userEmpty = $('.account').find('input[name="user"]').val() == "";
		var passEmpty = $('.account').find('input[name="pass"]').val() == "";

		if(userEmpty || passEmpty){

			if(userEmpty){
				$('.account').find('input[name="user"]').addClass('error');
				$('.account').find('input[name="user"] + .hint').css('visibility', 'visible');
			}

			if(passEmpty){
				$('.account').find('input[name="pass"]').addClass('error');
				$('.account').find('input[name="pass"] + .hint').css('visibility', 'visible');
			}

			$('.account').addClass('account--nope');
			setTimeout(function(){ $('.account').removeClass('account--nope') }, 500);

		}else{
			$('.account').addClass('account--hidden__success');
			setTimeout(function(){ window.location = "/account"; }, 250);
		}

		return false;

	});

	$('.account').find('button[type="reset"]').click(function(){
		$('.account').addClass('account--hidden');

		setTimeout(function(){

			$('.account').find('input[name="user"]').val("");
			$('.account').find('input[name="pass"]').val("");

			$('.account').find('input[name="user"]').removeClass('error');
			$('.account').find('input[name="pass"]').removeClass('error');

			$('.account').find('input[name="user"] + .hint').css('visibility', 'hidden');
			$('.account').find('input[name="pass"] + .hint').css('visibility', 'hidden');

		}, 750);

		$('.account').attr('type', 'submit').focus();
	});

	$('.cookie-banner').find('button.close').click(function(){
		$('.cookie-banner').fadeOut();
	});

});

if($('.info-section .join').length !== 0){

	$(window).scroll(function(){ // When the page scrolls
		$fadeSpeed = 250;

		var offset = $('.info-section .join').offset().top + $('.info-section .join').height() - $('header').height();

		if( $(window).scrollTop() > offset ) {     // If the page is scrolled down by 100px
			$('nav .join a').removeClass('hidden');  // Show '.toTheTop' triangle
		}else{
			// Above 100px
			$('nav .join a').addClass('hidden');  // Show '.toTheTop' triangle
		}
	});

}