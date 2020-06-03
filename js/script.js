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
		autoWidth: '100%',
		margin: 43,
		items: 7,
		nav: true,
		loop: true,
		dots: false,
		smartspeed: 3000,
		navText: ["<img src='assets/img/icons/left-arrow.svg' width='17px'>", "<img src='assets/img/icons/right-arrow.svg' width='17px'>"]
	});


});
