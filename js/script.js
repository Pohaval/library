$(document).ready(function () {

	const navslider = $('#navslider');
	const bookslider = $('#bookslider');

	navslider.owlCarousel({
		margin: 20,
		nav: true,
		autoWidth: '1',
		dots: false,
		navText: ["<img src='assets/img/icons/left-arrow.svg' width='15px'>", "<img src='assets/img/icons/right-arrow.svg' width='15px'>"]
	});
	bookslider.owlCarousel({
		margin: 0,
		items: 7,
		nav: true,
		loop: true,
		dots: false,
		smartspeed: 3000,
		navText: ["<img src='assets/img/icons/left-arrow.svg' width='15px'>", "<img src='assets/img/icons/right-arrow.svg' width='15px'>"]
	});


});
