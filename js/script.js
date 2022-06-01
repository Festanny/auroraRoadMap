// preloader
window.onload = function () {
	document.body.classList.add('loaded_hiding');
	window.setTimeout(function () {
		document.body.classList.add('loaded');
		document.body.classList.remove('loaded_hiding');
	}, 500);
	document.body.style.overflow = 'auto';
	videoCheck();
	f1();
}

// cookie
function f1() {
	$(".preloader").css('display', 'flex');
	if ($.cookie('videoEnd') == 1) {
		$(".preloader").remove();
	}
}

// stop video
function videoCheck() {
	$("#preloader-video").on("ended", function (){
		$(".preloader").fadeOut('slow');
		$('body').css('overflow', 'auto');
		$.cookie('videoEnd', '1', { expires: 7 });
	});
	$('#skip-preloader').click(() => {
		$(".preloader").fadeOut('slow');
		$('body').css('overflow', 'auto');
	});
}

// Tab-updates
$('.latest-update .info-block .block-updates a').click(function () {
	var id = $(this).attr('data-tab-updates'),
		content = $('.latest-update .info-block .info .block[data-tab-updates="' + id + '"]');

	$('.latest-update .info-block .block-updates a.active').removeClass('active');
	$(this).addClass('active');

	$('.latest-update .info-block .info .block.active').removeClass('active');
	content.addClass('active');
});