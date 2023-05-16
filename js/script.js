$(document).ready(function() {
 	
//navbar scroll	
 	$(window).scroll(function() {    
	    const scroll = $(window).scrollTop();
	    if (scroll >= 569) {
	        $(".navbar").addClass("navbar-fixed dark-bar");
	    } else {
	        $(".navbar").removeClass("navbar-fixed dark-bar");

	    }
	});

 // Menu
	$( ".navbar__bars" ).click(function() {
		$(this).toggleClass( "navbar__bars--close" );
		$('#menu-icon').toggleClass('fa-sharp fa-regular fa-xmark');
		$('.menu').toggleClass( "menu--active" );
		$(".navbar").toggleClass("light-bar");
	});

	$('.expert-slider').owlCarousel({
	    loop: false,
	    rewind: true,
	    items: 1,
	    smartSpeed: 400,
	    dots: true,
	});

	$('.workstations__row').owlCarousel({
	    loop: false,
	    margin:30,
	    dots: true,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:2
	        },
	        1000:{
	            items:3
	        }
	    }
	});
});

