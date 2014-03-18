$(document).ready(function(){
	logoInit();
	navInit();
	logInPanelInit();
	cookieBannerInit();

	anchorPageScrolling();
});

function prototypeFunctionality(){
	$('li.game').click(function(){
		$('li.game').each(function(){
			$(this).addClass('game-unselected');
		});
		$(this).addClass('game-selected');
		$(this).removeClass('game-unselected');
	});
}

function logoInit(){
	setTimeout(function(){
		$('.logo').removeClass('logo-animation');
	}, 250);
}

function navInit(){
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

	smallJoinButton();
}

function smallJoinButton(){

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

}

function cookieBannerInit(){
	$('.cookie-banner').find('button.close').click(function(){
		$('.cookie-banner').fadeOut();
	});
}

function logInPanelInit(){

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

}

// so anchor links do a smooth scroll
function anchorPageScrolling(){
	$('.account-panel aside a').click(function(){ scrollPage(this) });
}

function scrollPage(clicked){
	console.log('scrollPage');
		// Speed of the animation in ms
		var animationSpeed = 500

		var host = window.location.protocol + "//" + window.location.host;
		var url = host + window.location.pathname; // Get current URL

		var id = String(clicked).substr(url.length); // Take the URL and leave the # part
		var strippedId = id.substr(1);

		var title = capsString(strippedId)+" ~ UoPCS - The Gaming Society";
		
		document.title = title;

		var postPosition = $(id).position().top; // Finds the position from the top of the window for the heading with the ID 'hrefValue'
				
		// How far scrolled down minus the height of the header
		var scrollAmount = postPosition;
		// Moves to the top of the post in 'animationSpeed'ms
		$('body').animate({ scrollTop: scrollAmount }, animationSpeed);
		
		event.preventDefault(); // Stops the link's normal behaviour
}

function capsString(string){
	return string.substring(0, 1).toUpperCase()+string.substring(1);
}

