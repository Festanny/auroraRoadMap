// preloader
window.onload = function () {
	document.body.classList.add('loaded_hiding');
	window.setTimeout(function () {
		document.body.classList.add('loaded');
		document.body.classList.remove('loaded_hiding');
	}, 500);
	document.body.style.overflow = 'auto';
	// mainBlock();
	percent();
	imgWomen();
}

// href
$("body").on('click', '[href*="#"]', function (e) {
	var fixed_offset = $('header').height();
	$('html,body').stop().animate({
		scrollTop: $(this.hash).offset().top - fixed_offset
	}, 1000);
	e.preventDefault();
});

function percent() {
	let number_1 = $('#token .info-block .text-main .progress .line .numbers span:nth-of-type(1)').text().replace(/\./g,''),
	number_2 = $('#token .info-block .text-main .progress .line .numbers span:nth-of-type(2)').text().replace(/\./g,''),
	percent = (number_1/number_2) * 100;
	document.documentElement.style.setProperty("--progress", percent + "%");
}

// function mainBlock() {
// 	let heightHeader = $('header').height();
// 	$('main').css('margin-top', -heightHeader);
// }

function imgWomen() {
	let bottomWomen = (($('#token').height() - $('#token .container').height())/2)-50;
	$('.women').css('bottom', -bottomWomen);
}

// scroll fixed header
$(window).scroll(function () {
	if ($(window).width() > 799) {
		if ($(window).scrollTop() > 10) {
			$('header').addClass('scrollHeader');
		} else {
			$('header').removeClass('scrollHeader');
		}
	}
});
if ($(window).width() <= 799) {
	$('header').addClass('scrollHeader');
}