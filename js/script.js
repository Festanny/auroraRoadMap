// preloader
window.onload = function () {
	document.body.classList.add('loaded_hiding');
	window.setTimeout(function () {
		document.body.classList.add('loaded');
		document.body.classList.remove('loaded_hiding');
	}, 500);
	document.body.style.overflow = 'auto';

	let number_1 = $('#token .info-block .text-main .progress .line .numbers span:nth-of-type(1)').text().replace(/\./g,''),
		number_2 = $('#token .info-block .text-main .progress .line .numbers span:nth-of-type(2)').text().replace(/\./g,''),
		percent = (number_1/number_2) * 100;
	document.documentElement.style.setProperty("--test", percent + "%");
}