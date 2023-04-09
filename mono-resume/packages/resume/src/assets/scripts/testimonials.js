$(document).ready(function() {

	
	setTimeout(function(){
		$('.testimonial-carousel').owlCarousel({
		loop: true,
		nav: true,
		dots: true,
		autoplayHoverPause: true,
		autoplay: true,
		margin: 30,
		navText: [
		"",
		""
		],
		responsive: {
		0: {
		items: 1,
		},
		576: {
		items: 1,
		},
		768: {
		items: 2,
		},
		992: {
		items: 3,
		}
		}
		});
		
		}, 2000);


});



