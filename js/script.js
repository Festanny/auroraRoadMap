// preloader
window.onload = function () {
	document.body.classList.add('loaded_hiding');
	window.setTimeout(function () {
		document.body.classList.add('loaded');
		document.body.classList.remove('loaded_hiding');
	}, 500);
	document.body.style.overflow = 'auto';
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