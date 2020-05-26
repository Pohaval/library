$(document).ready(function () {

	const navslider = $('#navslider');
	const bookslider = $('#bookslider');

	navslider.owlCarousel({
		margin: 20,
		nav: true,
		autoWidth: 1,
		navText: ["prev", "next"]//["<img src='img/arrow.png' width='15px'>", "<img src='img/arrow.png' width='15px'>"]
	});
	bookslider.owlCarousel({
		margin: 20,
		items: 7,
		nav: true,
		loop: true,
		smartspeed: 3000,
		navText: ["prev", "next"]//["<img src='img/arrow.png' width='15px'>", "<img src='img/arrow.png' width='15px'>"]
	});


});
